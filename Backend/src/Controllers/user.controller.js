import { User  } from "../Models/users.model.js";
import httpStatus from "http-status";
import bcrypt, {hash} from "bcrypt";
import crypto from "crypto";
import { Meeting } from "../Models/meeting.model.js";



const login = async(req, res) =>{
const { username, password} = req.body;
if(!username || !password){
    return res.status(400).json({message: "Please Provide"})
}

 try{
    const user = await User.findOne({username});
    if(!user){
        return res.status(httpStatus.NOT_FOUND).json({message: "User not found"});
    }

    let isPassword =  await bcrypt.compare(password, user.password);
    if(isPassword){
        let token = crypto.randomBytes(20).toString("hex");
        user.token = token;
        await user.save();
        return res.status(httpStatus.OK).json({token: token});
    }else{
        return res.status(httpStatus.UNAUTHORIZED).json({message: "Invalid Username or Password"});
    }
 }catch(e){
      return res.Status(500).json({message: `Something went wrong ${e}`});
 }
}

const register = async( req,res) =>{
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
     console.log(name);
    try{
            const existingUser = await User.findOne({username});
             if(existingUser){
                return res.status(httpStatus.CONFLICT).json({message: "User already exists"});

        }
         const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            name: name, 
            username: username,
            password: hashedPassword
        })
        await newUser.save();

        res.status(httpStatus.CREATED).json({message: "User Registered"});
    }catch(e){
        res.json({message: `Something went wrong ${e}`});
    }
};


const getUserHistory = async (req, res) => {
    const { token } = req.query;

    try {
        const user = await User.findOne({ token: token });
        const meetings = await Meeting.find({ user_id: user.username })
        res.json(meetings)
    } catch (e) {
        res.json({ message: `Something went wrong ${e}` })
    }
}

const addToUserHistory = async (req, res) => {
    const { token, meeting_code } = req.body;

    try {
        const user = await User.findOne({ token: token });

        const newMeeting = new Meeting({
            user_id: user.username,
            meetingCode: meeting_code
        })

        await newMeeting.save();

        res.status(httpStatus.CREATED).json({ message: "Added code to history" })
    } catch (e) {
        res.json({ message: `Something went wrong ${e}` })
    }
}

export { login, register, getUserHistory, addToUserHistory}

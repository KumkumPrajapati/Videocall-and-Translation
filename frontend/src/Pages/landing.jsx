import React from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
 

export default function LandingPage(){

    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
              <nav>
                <div className='navHeader'>
                    <h2> Translate Meet Zone</h2>
                </div>

                
                  
                 <div className='navlist'>
                 <p  style={{color:"white", backgroundColor:"#D97500", height:"35px", width:" fit-content" , padding:"0.4rem", borderRadius:"20%"}}
                 onClick={() => {
                        router("/translation")
                    }}><b> Language Translator </b></p>

                    <p onClick={() => {
                        router("/aljk23")
                    }}><b>Join as Guest</b></p>
                    <p onClick={() => {
                        router("/auth")

                    }}><b>Register</b></p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p><b>Login</b></p>

                        
                    </div>
                </div>
            </nav>

           <div className='landingMainContainer'>
            <div>
            <h1><span style={{color:"#FF9839"}}>Connect</span> with your loved Ones</h1>
            <p>Cover a distance by Apna Video Call</p>
           <div role='button'> <Link to={"/auth"}>Get Started</Link></div>
            </div>
            <div>
                  <img src="/mobile.png" alt=""></img>
            </div>
           </div>
        </div>
    )
}
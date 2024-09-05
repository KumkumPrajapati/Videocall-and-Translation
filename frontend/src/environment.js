let IS_PROD = true;


const server = IS_PROD ?
 "https://translate-meet-zone-1.onrender.com" :
    "http://localhost:8080"
     


export default server;
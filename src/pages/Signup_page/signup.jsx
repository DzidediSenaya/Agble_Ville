import React from "react";



export default function SignUp_Page(){
    return(
     <>
    <div className="Container">
        <form className="form">

        
        <h1 className="signup-text">SignUp Page</h1><br></br>
    <div className="email">
    
    <input type="email" placeholder="Email Address"/>
   </div>

   <div className="password">
    <input type="password" placeholder="Create Password"/>
   </div>
   <div className="repassword"> 
   
    <input type="password" placeholder="Confirm Password"/>
   </div>

   <div className="signup-button">
       <button type="submit" > Sign UP </button>
   </div>
   <div className="AHA"><br></br>
       <p >Already have an Account?
       <a href="https//:">Login</a>
       </p>
       
       
   </div>
   </form>
        </div>
   
     </>
    );
} 
import React from 'react'
import '../SignIn/SignIn.css'
import LoginImg from "../../Assets/login.webp";
import UserIcon from "../../Assets/user-Logo.png";
import passwordIcon from "../../Assets/passwordLock.png";
import emailIcon from "../../Assets/email-Icon.png";
import backgroundImage from "../../Assets/Background-image.jpg";

const SignUp = () => {
  return (
    <div className='main-cont'> 
      <img  className='back-img'  src={backgroundImage} alt="" />
        <div className='main-container'>
         <div className='image-cont'>
            <div className='image'>
            <img className='imgs' src={LoginImg} alt="" />
            </div>
            <div className='image-text' >
            Move fast, stay aligned, and build better - together.
            </div>
           
          </div>  
          <div className='form-cont'>
            <div className='login'>
            <div className='login-heading'>
              Sign Up Here!
            </div>
            </div>

           
            <form>
              <div className='one'>
                <div className='icon-cont'>
                  <img className='icons' src={UserIcon}alt="" />
                </div>
                <input className='input-tags' type="text" placeholder="name" /> 
              </div>
              <div className='one'>
                <div className='icon-cont' >
                  <img className='icons-2' src={emailIcon}alt="" />
                </div>
                <input className='input-tags' type="text" placeholder="e mail" /> 
              </div>
              <div className='one'>
                <div className='icon-cont'>
                  <img className='icons' src={passwordIcon} alt="" />
                </div>
                <input className='input-tags' type="text" placeholder="email " />
              </div>
              <div className='button-cont' >
                <button type="submit" className='signup-button'>Sign Up</button>

              </div>
              
             
            </form>
          </div>
 
        </div>
      
    </div>
  )
}

export default SignUp

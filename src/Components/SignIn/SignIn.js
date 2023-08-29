import React from 'react';
import './SignIn.css';
import LoginImg from "../../Assets/login.webp";
import UserIcon from "../../Assets/user-Logo.png";
import passwordIcon from "../../Assets/passwordLock.png"


const SignIn = () => {
  return (
    <div className='main-cont'>
      
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
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
              Login Here!
            </div>
            </div>

           
            <form>
              <div className='one'>
                <div className='icon-cont' >
                  <img className='icons' src={UserIcon}alt="" />
                </div>
                <input className='input-tags' type="text" placeholder="username" /> 
              </div>
              <div className='one'>
                <div className='icon-cont'>
                  <img className='icons' src={passwordIcon} alt="" />
                </div>
                <input className='input-tags' type="text" placeholder="password" />
              </div>
              <div className='three'>
                <div className='check-and-rme'>         
                 <input type="checkbox" /> 
                 <label htmlFor="">remember password</label>
                </div>
                <div className='button-cont'>
                 <button type="submit" className='signup-button'>LOGIN</button>
                </div>
              </div>
            </form>
          </div>
 
        </div>
  {/*-------------------------------------------------------------------------------------------------------------------------------------------  */}
    </div>
  )
}

export default SignIn

import React, {useEffect, useState} from 'react'
import '../SignIn/SignIn.css'
import LoginImg from "../../Assets/login.webp";
import UserIcon from "../../Assets/user-Logo.png";
import passwordIcon from "../../Assets/passwordLock.png";
import emailIcon from "../../Assets/email-Icon.png";
import backgroundImage from "../../Assets/Background-image.jpg";
import { useNavigate } from 'react-router-dom';
import Toaster from '../Toaster/Toaster';

const SignUp = () => {

  const navigate = useNavigate();
  const [showToaster, setShowToaster] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userObject, setUserObject] = useState({
    name: "",
    email : "",
    password : ""
  })

  function userExists(userDeatils){
    let users = localStorage.getItem('users');
    if(!users){
      return;
    }

    users = JSON.parse(users);
    for(let i = 0; i < users.length; i++){
      if(users[i].email === userObject.email){
        return true;
      }
    }
    return false;

  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    let users = localStorage.getItem('users');
    if(users){
      users = JSON.parse(users);
      if(userExists(userObject)){
        setShowToaster(true);
        setErrorMessage('User Already Exists')
      }else{
        users.push(userObject);
        setUserObject({
          name: "",
          email : "",
          password : ""
        })
        localStorage.setItem('users',JSON.stringify(users));
        navigate('/');
      }
    }else{
      users = [];
      users.push(userObject);
      setUserObject({
        name: "",
        email : "",
        password : ""
      })
      localStorage.setItem('users',JSON.stringify(users));
      navigate('/');
    }   
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserObject(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const routeToSigin = ()=>{
    navigate('/');
  }


  return (
    <div className='main-cont'> 
      {/* <img  className='back-img'  src={backgroundImage} alt="" /> */}
      {showToaster ? <Toaster message={errorMessage} closeToaster={setShowToaster}/> : null}
        <div className='main-container'>
         <div className='image-cont'>
            <div className='image'>
            {/* <img className='imgs' src={LoginImg} alt="" /> */}
            </div>
            <div className='image-text' >
            Move fast, stay aligned, and build better - together.
            </div>
           
          </div>  
          <div className='form-cont'>
            <div className='login'>
            <div className='login-heading'>

              You are here for the First Time !!
              <br/>
              Sign Up Here!!!
            </div>
            </div>
            <form onSubmit={(e)=> handleSubmit(e)}> 
              <div className='one'>
                <div className='icon-cont'>
                  <img className='icons' src={UserIcon}alt="" />
                </div>
                <input className='input-tags' type="text" placeholder="name" name="name" onChange={handleInputChange} value={userObject.name} required/> 
              </div>
              <div className='one'>
                <div className='icon-cont' >
                  <img className='icons-2' src={emailIcon}alt="" />
                </div>
                <input className='input-tags' type="text" placeholder="email" name="email" onChange={handleInputChange} value={userObject.email} required/> 
              </div>
              <div className='one'>
                <div className='icon-cont'>
                  <img className='icons' src={passwordIcon} alt="" />
                </div>
                <input className='input-tags' type="password" placeholder="password" name="password" onChange={handleInputChange} value={userObject.password} required/>
              </div>
              <div className='button-cont' >
                <button type="submit" className='primary-btn'>Create Account</button>

              </div>
            </form>
              <div className='button-signIn-cont' style={{right: "30px"}}>
                <button type="button" onClick={()=>{routeToSigin()}} className=' primary-btn'>Sign In</button>
              </div>
          </div>
 
        </div>
      
    </div>
  )
}

export default SignUp

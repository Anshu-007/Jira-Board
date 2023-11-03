import {useEffect, useState} from 'react';
import './SignIn.css';
import LoginImg from "../../Assets/login.webp";
import UserIcon from "../../Assets/user-Logo.png";
import passwordIcon from "../../Assets/passwordLock.png"
import {Link, useNavigate} from 'react-router-dom';
import Toaster from '../Toaster/Toaster';


const SignIn = () => {

  const navigate = useNavigate();
  const [showToaster, setShowToaster] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(()=>{
    let users = localStorage.getItem('users');
    // console.log(users);
    if(!users){
      navigate('/signUp')
    }
  },[])

  const [userDetails, setUserDetails] = useState({
    email :"",
    password: ""
  });

  const handleChange = (event)=>{
    const {name,value} = event.target;
    setUserDetails(prevData =>({
      ...prevData,
      [name] : value
    }))   
  } 

  const handleSubmit = async(e)=>{
    e.preventDefault();


    let users = localStorage.getItem('users');
    if(users){
      users = JSON.parse(users);
      let userFound = false;
      for(let i = 0; i < users.length; i++){
        if(users[i].email === userDetails.email){
          userFound = true;
          
          console.log(users[i],userDetails)
          if(users[i].password !== userDetails.password){
            setErrorMessage('Wrong Password')
            setShowToaster(true);
            break;
          }else{
            localStorage.setItem('authorisedUser',JSON.stringify(true));
            navigate('/home')
          }

        }

      }
      if(!userFound){
        setErrorMessage('User not exists')
        setShowToaster(true);
      }
      
    }

    // try{
      
    //   let response = await fetch('http://localhost:5000/api/auth/signIn',{
    //     method:'POST',
    //     headers:{
    //       'Content-Type': 'application/json'
    //     },
    //     body:JSON.stringify(userDetails)
    //   });

    //   let data = await response.json();
    //   navigate('/home');

    // }catch(error){
    //   console.log(error);
    // }

  }

  const routeToSignIn = ()=>{
    navigate('/signUp');
  }



  return (
    <div className='main-cont'>
      {showToaster ? <Toaster message={errorMessage} closeToaster={setShowToaster}/> : null}
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

           
            <form onSubmit={(e)=> handleSubmit(e)}>
              <div className='one'>
                <div className='icon-cont' >
                  <img className='icons' src={UserIcon}alt="" />
                </div>
                <input className='input-tags' type="email" name="email" placeholder="username" onChange={handleChange} value={userDetails.email} required/> 
              </div>
              <div className='one'>
                <div className='icon-cont'>
                  <img className='icons' src={passwordIcon} alt="" />
                </div>
                <input className='input-tags' type="password" name="password" placeholder="password" onChange={handleChange} value={userDetails.password} required/>
              </div>
              <div className='three'>
                {/* <div className='check-and-rme'>         
                 <input type="checkbox" /> 
                 <label htmlFor="">remember password</label>
                </div> */}
                <div className='button-cont'>
                 <button type="submit" className='primary-btn'>Proceed</button>
                </div>
              </div>
            </form>
            <div className='button-signIn-cont' style={{right: "30px"}}>
              <button type="button" onClick={()=>routeToSignIn()}  className='primary-btn'>Sign Up</button>
            </div>
          </div>
 
        </div>
  {/*-------------------------------------------------------------------------------------------------------------------------------------------  */}
    </div>
  )
}

export default SignIn

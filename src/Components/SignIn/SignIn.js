import {useState} from 'react';
import './SignIn.css';
import LoginImg from "../../Assets/login.webp";
import UserIcon from "../../Assets/user-Logo.png";
import passwordIcon from "../../Assets/passwordLock.png"
import {Link, useNavigate} from 'react-router-dom';


const SignIn = () => {

  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    email :"",
    password: ""
  });

  const handleChange = (event)=>{
    const {name,value} = event.target;
    console.log(name, value);
    setUserDetails(prevData =>({
      ...prevData,
      [name] : value
    }))   
  } 

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{
      
      let response = await fetch('http://localhost:5000/api/auth/signIn',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(userDetails)
      });

      let data = await response.json();

      console.log(data);

      navigate('/home');

    }catch(error){
      console.log(error);
    }

  }

  const routeToSignIn = ()=>{
    const data = {user : {name:"abcd",age:39}}
    navigate('/signUp', {state : data});
  }



  return (
    <div className='main-cont'>
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
                 <button type="submit" className='signup-button'>LOGIN</button>
                </div>
              </div>
            </form>
            <div className='button-cont'>
              <button type="button" onClick={()=>routeToSignIn()} className='signup-button'>Sign In</button>
            </div>
          </div>
 
        </div>
  {/*-------------------------------------------------------------------------------------------------------------------------------------------  */}
    </div>
  )
}

export default SignIn

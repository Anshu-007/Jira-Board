import React, { useEffect, useState } from "react";
import "../SignIn/SignIn.css";
import LoginImg from "../../Assets/login.webp";
import UserIcon from "../../Assets/user-Logo.png";
import passwordIcon from "../../Assets/passwordLock.png";
import emailIcon from "../../Assets/email-Icon.png";
import backgroundImage from "../../Assets/Background-image.jpg";
import { useNavigate } from "react-router-dom";
import { Form, Button, Input } from "antd";
import Toaster from "../Toaster/Toaster";

const SignUp = ({Sign}) => {
  const [isSignUp, setIsSignUp] = useState(Sign? true : false);
  let [user ,setUser ] = useState({
    name :"",
    email:"",
    password:"",
    role:"Super Admin"
  })
  const navigate = useNavigate();
  const [showToaster, setShowToaster] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userObject, setUserObject] = useState({
    name: "",
    email: "",
    password: "",
  });

  function userExists(userDeatils) {
    let users = localStorage.getItem("users");
    if (!users) {
      return;
    }

    users = JSON.parse(users);
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === userObject.email) {
        return true;
      }
    }
    return false;
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    let users = localStorage.getItem("users");
    if (users) {
      users = JSON.parse(users);
      if (userExists(userObject)) {
        setShowToaster(true);
        setErrorMessage("User Already Exists");
      } else {
        users.push(userObject);
        setUserObject({
          name: "",
          email: "",
          password: "",
        });
        localStorage.setItem("users", JSON.stringify(users));
        navigate("/");
      }
    } else {
      users = [];
      users.push(userObject);
      setUserObject({
        name: "",
        email: "",
        password: "",
      });
      localStorage.setItem("users", JSON.stringify(users));
      navigate("/");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const routeToSigin = () => {
    setIsSignUp(!isSignUp)
    navigate(isSignUp?"/signIn":"/signUp");
  };
  const Submit = async ()=>{
    console.log('HII');
    if(isSignUp){

      try{
        let response = await fetch("http://localhost:8080/user/save", {
          method: "Post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...user }),
        });
        if(response.ok) routeToSigin();
      }catch(error){
        console.log(error)
      }
    }else{




      try{
        let newUser = {email : user.email , password : user.password}
        let response = await fetch("http://localhost:8080/user/validate",
          {method:"Post",
           headers:{"Content-Type" : "application/json"},
           body: JSON.stringify({...newUser})
           
          })
          if(response.ok) navigate("/home")
      }catch(error){
        console.log(error)
      }
      
    }
  }

  return (
    <div className="main-cont">
      {/* <img  className='back-img'  src={backgroundImage} alt="" /> */}
      {/* {showToaster ? <Toaster message={errorMessage} closeToaster={setShowToaster}/> : null} */}
      <div className="main-container">
        <div className="image-cont">
          <div className="image">
            {/* <img className='imgs' src={LoginImg} alt="" /> */}
          </div>
          <div className="image-text">
            Move fast, stay aligned, and build better - together.
          </div>
        </div>
        <div className="form-cont">
          <div className="login">
            <div className="login-heading">
              {isSignUp && "You are here for the First Time !!"}
              <br />
              {isSignUp?"Sign Up Here!!!":"Log In Here !!"}
            </div>
          </div>

          <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
            <Form onFinish={(e) => Submit(e)}>
              {isSignUp && (
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[

                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input name="name" onChange={handleInputChange} value={user.username} />
                </Form.Item>
              )}
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Invalid email!" },
                ]}
              >
                <Input name="email" onChange={handleInputChange} value={user.email} style={{marginLeft:"27px",width : "214px"}} />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input name="password" onChange={handleInputChange} value={user.password} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {isSignUp ? "Sign Up" : "Sign In"}
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="button-signIn-cont" style={{ right: "30px" }}>
            <button
              type="button"
              onClick={() => {
                routeToSigin();
              }}
              className=" primary-btn"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

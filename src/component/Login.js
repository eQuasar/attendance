import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import server from "./host.json";
import Alert from 'react-bootstrap/Alert';


const Login = () => {

  const[variant,setVariant]=useState("");
    const[message,setMessage]=useState("");
  //const [name,setName]=useState("");
  const [password, setPassword] = useState("");
  //const [confirmpassword,confirmPassword]=useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const collectData = async () => {
    // console.warn("email,password", email, password);
    let result = await fetch(server.SERVER_URL + "auth/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    
    // console.warn(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      localStorage.setItem("loggin_id", JSON.stringify(result.id));
      navigate("/");
    } else{
      setMessage("ERROR : "+result.errors[0].message)
      setVariant('danger')
      //alert("please enter correct details");
    }
  };

  return (
    <div className="main">
      {/* <img src={bg} /> */}
      <div className="leftChild">
        <img
          alt="pic"
          src="https://img.freepik.com/premium-vector/graphic-designer-digital-graphic-drawing-tool-flat-design-illustration_7081-2768.jpg?w=2000"
          className="leftImage"
        ></img>
      </div>

      <div className="rightChild">
        <img
          alt="logo"
          src="https://equasar.com/wp-content/uploads/2022/02/eQuasar.png"
          className="logo"
        ></img>
        {/* <h10>Welcome Back!</h10> */}
        {/* <h4>
          <span>Welcome to eQuasar</span>
        </h4> */}

        <input
          className="inputBox"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />

        <input
          className="inputBox"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />

        <button onClick={collectData} type="button" className="appButton">
          Login
        </button>
        {message?<Alert  variant={variant}>{message}</Alert>:null}

      </div>
    </div>
  );
};

export default Login;

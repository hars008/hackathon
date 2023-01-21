import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [password,setPassword]=useState("");
  const[email,setEmail]=useState("");

  const emails =(e)=>{
    setEmail(e.target.value);
  }
  const passwords = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    }
    fetch("http://localhost:80/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((result) => {
      result.json().then((resp) => {
        if (resp) {
          localStorage.setItem(resp._id,"userid");
          localStorage.setItem(resp.isAdmin, "userisAdmin");
          localStorage.setItem(resp.accessToken, "token");
          console.log("hogya");
        }
        else {
          alert("Something went wrong");
          console.log("gadbad hogayi");
        }
      })
    })
  }
  

  return (
    <div className="login-container">
      <h1>{isLogin ? "Login" : "Register"}</h1>
      <form onSubmit={handleSubmit} className="hi form-signin">
        <input
          type="email"
          name="email"
          placeholder="Email asli "
          value={email}
          onChange={emails}
          required
          className="form-control"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={passwords}
          required
        />
        
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
      <p>
        {isLogin
          ? "Don't have an account? "
          : "Already have an account? "}
        <Link to="#" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Register" : "Login"}
        </Link>
      </p>
    </div>
  );
}

export default Login;

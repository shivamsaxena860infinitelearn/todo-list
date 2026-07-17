import React, { useState } from "react";

function Signup({ setPage }) {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const signup = (e)=>{

    e.preventDefault();


    if(!name || !email || !password || !confirmPassword){
      alert("Please fill all fields");
      return;
    }


    if(password !== confirmPassword){
      alert("Password does not match");
      return;
    }


    const user = {
      name,
      email,
      password
    };


    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );


    alert("Signup Successful 🎉");


    setPage("login");

  };


  return (

    <div className="container my-5">


      <div className="card shadow-lg border-0 rounded-4 p-5 mx-auto"
      style={{maxWidth:"500px"}}>


        <h2 className="text-center mb-4">
          🚀 Create Account
        </h2>


        <form onSubmit={signup}>


          <input
          className="form-control mb-3"
          placeholder="Enter Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />


          <input
          className="form-control mb-3"
          placeholder="Enter Email"
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />


          <input
          className="form-control mb-3"
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />


          <input
          className="form-control mb-4"
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
          />



          <button
          className="btn btn-primary w-100"
          >

          Signup

          </button>


        </form>


        <p className="text-center mt-4">

          Already have account?

          <button
          className="btn btn-link"
          onClick={()=>setPage("login")}
          >
          Login
          </button>

        </p>


      </div>


    </div>

  );
}


export default Signup;
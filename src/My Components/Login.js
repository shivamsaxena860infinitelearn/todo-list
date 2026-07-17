import React, { useState } from "react";

function Login({ setPage, setIsLogin }) {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  const login = (e)=>{

    e.preventDefault();


    const savedUser = JSON.parse(
      localStorage.getItem("user")
    );


    if(!savedUser){

      alert("No account found. Please Signup first.");
      return;

    }



    if(
      email === savedUser.email &&
      password === savedUser.password
    ){

      localStorage.setItem(
        "isLogin",
        "true"
      );


      alert("Login Successful 🎉");


      setIsLogin(true);


    }
    else{

      alert("Invalid Email or Password ❌");

    }


  };



  return (

    <div className="container my-5">


      <div
      className="card shadow-lg border-0 rounded-4 p-5 mx-auto"
      style={{maxWidth:"500px"}}
      >


        <h2 className="text-center mb-4">
          🔐 Login Account
        </h2>



        <form onSubmit={login}>


          <input

          type="email"

          className="form-control mb-3"

          placeholder="Enter Email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

          />



          <input

          type="password"

          className="form-control mb-4"

          placeholder="Enter Password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

          />



          <button

          className="btn btn-success w-100"

          >

          Login

          </button>


        </form>



        <p className="text-center mt-4">

        Don't have account?


        <button

        className="btn btn-link"

        onClick={()=>setPage("signup")}

        >

        Signup

        </button>


        </p>



      </div>


    </div>

  );

}


export default Login;
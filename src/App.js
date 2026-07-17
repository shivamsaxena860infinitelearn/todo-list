import { useState, useEffect } from "react";
import "./App.css";

import Header from "./My Components/Header";
import AddTodo from "./My Components/AddTodo";
import Todos from "./My Components/Todos";
import Dashboard from "./My Components/Dashboard";
import Footer from "./My Components/Footer";
import Analytics from "./My Components/Analytics";
import Login from "./My Components/Login";
import Signup from "./My Components/Signup";

function App() {


  // ==========================
  // Load Todos
  // ==========================

  const getLocalTodos = () => {

    const data = localStorage.getItem("todos");

    if(data === null){

      return [
        {
          sno:1,
          title:"Learn React",
          desc:"Complete React Basics",
          completed:false
        },
        {
          sno:2,
          title:"Build Todo App",
          desc:"Finish Todo Project",
          completed:false
        }
      ];

    }

    return JSON.parse(data);

  };



  // ==========================
  // States
  // ==========================

  const [todos,setTodos] = useState(getLocalTodos());


  const [theme,setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );


  const [showAbout,setShowAbout] = useState(false);


  const [search,setSearch] = useState("");





  // ==========================
  // Add Todo
  // ==========================

  const addTodo = (title,desc)=>{


    const sno =
    todos.length===0
    ? 1
    : todos[todos.length-1].sno+1;



    const newTodo = {

      sno,
      title,
      desc,
      completed:false

    };


    setTodos([...todos,newTodo]);

  };





  // ==========================
  // Delete
  // ==========================

  const onDelete=(todo)=>{

    setTodos(
      todos.filter(
        item=>item!==todo
      )
    );

  };





  // ==========================
  // Complete
  // ==========================


  const toggleComplete=(todo)=>{


    setTodos(

      todos.map(item=>

        item.sno===todo.sno

        ?
        {
          ...item,
          completed:!item.completed
        }

        :
        item

      )

    );

  };







  // ==========================
  // Local Storage
  // ==========================


  useEffect(()=>{

    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );

  },[todos]);







  // ==========================
  // Theme
  // ==========================


  useEffect(()=>{


    document.body.setAttribute(
      "data-theme",
      theme
    );


    localStorage.setItem(
      "theme",
      theme
    );


  },[theme]);





  const toggleTheme=()=>{


    setTheme(

      theme==="light"
      ?
      "dark"
      :
      "light"

    );


  };







  // ==========================
  // Search Filter
  // ==========================


  const filteredTodos = todos.filter(todo=>

    todo.title
    .toLowerCase()
    .includes(search.toLowerCase())

    ||

    todo.desc
    .toLowerCase()
    .includes(search.toLowerCase())

  );








  return (

    <>


   <Header

  title="My Todo List"

  theme={theme}

  toggleTheme={toggleTheme}

  search={search}

  setSearch={setSearch}

  setShowAbout={setShowAbout}

/>





    <Dashboard todos={todos}/>





    <Analytics todos={todos}/>






    <AddTodo

      onAdd={addTodo}

    />






    <Todos

      todos={filteredTodos}

      onDelete={onDelete}

      toggleComplete={toggleComplete}

    />








    {
      showAbout &&

      <div 
      id="about"
      className="container my-5">

        <div className="card shadow-lg border-0 rounded-4 p-5">


        <h2 className="text-center text-primary">
          📋 About Todo Manager
        </h2>


        <p className="text-center lead mt-3">

        Modern React based Todo Application
        to manage daily tasks efficiently.

        </p>



        <div className="row mt-4">


        <div className="col-md-6">

        <h4>
        ✨ Features
        </h4>


        <ul>

        <li>Add Tasks</li>
        <li>Delete Tasks</li>
        <li>Complete Tasks</li>
        <li>Analytics Chart</li>
        <li>Dark Mode</li>
        <li>PDF Export</li>

        </ul>


        </div>





        <div className="col-md-6">

        <h4>
        🛠 Technologies
        </h4>


        <ul>

        <li>React JS</li>
        <li>Bootstrap 5</li>
        <li>JavaScript</li>
        <li>CSS3</li>
        <li>Local Storage</li>

        </ul>


        </div>


        </div>





        <button

        className="btn btn-danger d-block mx-auto"

        onClick={()=>setShowAbout(false)}

        >

        Close

        </button>


        </div>


      </div>

    }





    <Footer 
    setShowAbout={setShowAbout}
    />



    </>

  );

}


export default App;
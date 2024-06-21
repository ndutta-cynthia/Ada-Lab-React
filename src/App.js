import { Routes, Route,Link } from "react-router-dom";
// import { useState } from "react";
import Login from "./Login";
// import "./Login";
import Users from "./Users";
// import ".App.css";
import { login } from "./Login/utils";
// import LoginPage, { login } from "./LoginPage";
import LoginPage from "./LoginPage";


export function Introduction(){
  return(
    <h1>

    </h1>
  )
}

const App=() =>{
  
  return(
    <div>
      <LoginPage/>

      <Routes>
   <Route path='/login' element={<Login/>}/>
   <Route path='/users' element= {<Users/>}/>
     </Routes>
    </div>
  );
}
export default App;

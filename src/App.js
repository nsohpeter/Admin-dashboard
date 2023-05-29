import React from 'react';
import './App.css';

//import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
//import Navbar from './Components/Navbar/Navbar';
import Users from './Pages/Users/Users';
import SingleUser from './Pages/SingleUser/SingleUser';
import NewUser from './Pages/AddNewUser/NewUser';
import Statistics from './Pages/Statistics/Statistics';

function App() {
  return (
    <div className="App">
      <div className="Appglass">
       {/*  <Sidebar />
       < Navbar /> */}
       <Router>
          <Routes>
            <Route path='/'>
             <Route index element = {<Home/>}/> 
             <Route path='login' element = {<Login/>}/> 
             <Route path='register' element = {<Register/>}/> 
             <Route path='stats' element = {<Statistics/>}/> 
            </Route>
            <Route path='users'>
             <Route index element = {<Users/>}/> 
             <Route path=':userId' element = {<SingleUser/>}/> 
             <Route path='new' element = {<NewUser/>}/> 
            </Route>
             
          </Routes>
     
       </Router>
       
    </div>
    </div>
  );
}

export default App;

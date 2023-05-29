import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import List from '../../Components/TableList/List';
import './Login.css';
const Login = () => {
  return (
     <div className="login">
        <Sidebar />
    <div className='login-container'>
      <Navbar/>
      <div className="list">
           <List />
      </div>
    </div>
    </div>
  )
}

export default Login

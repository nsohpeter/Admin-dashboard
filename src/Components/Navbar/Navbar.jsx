import React from 'react'
import './Navbar.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='search' />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <span>user</span>
            <img src="https://images.pexels.com/photos/7036557/pexels-photo-7036557.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          </div>
           <div className="item">
            <DarkModeOutlinedIcon className='icon'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";


import './Sidebar.css';
import logo from '../../Images/logo.png';
import { Link } from 'react-router-dom';




const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="logo">
            <img src={logo} alt="" />
            <span>
                sh<span>o</span>ps
            </span>
        </div>
        {/* menu items */}
         <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{textDecoration:"none"}}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{textDecoration:"none"}}>
              <li>
                <PersonOutlineOutlinedIcon className="icon" />
                <span>Users</span>
              </li>
           </Link>
            <li>
              <StoreMallDirectoryOutlinedIcon className="icon" />
              <span>Products</span>
            </li>
        
          <li>
            <CreditCardOutlinedIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <Link to= "/stats"  style={{textDecoration:"none"}}>
            <li>
              <InsertChartOutlinedIcon className="icon" />
              <span>Stats</span>
            </li>
          </Link>
          <li>
            <NotificationsNoneOutlinedIcon className="icon" />
            <span>Notifications</span>
          </li>
          
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
     </div>
  )
}

export default Sidebar
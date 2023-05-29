import React from 'react'
import './Users.css';
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'

import Datatable from '../../Components/Datatable/Datatable';


const Users = () => {
  return (
    <div className='users'>
      <Sidebar />

      <div className="users-container">
         <Navbar />
        <div className="list">
           <Datatable />
      </div>
      </div>
    </div>
  )
}

export default Users

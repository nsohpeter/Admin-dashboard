import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Chart from '../../Components/Rechart/Chart';
import Sidebar from '../../Components/Sidebar/Sidebar';
import List from '../../Components/TableList/List';
import './SingleUser.css';
import { userRows } from '../../datatablesource';

import { useParams } from 'react-router-dom';

  

const SingleUser = () => {

   const {userId} = useParams();
    const id = Number(userId)
    const Rows = userRows.find((user) => user.id === id)

  
  return (
   <div className='singleUser'>
      <Sidebar />

      <div className="singleUser-container">
          <Navbar />
          <div className="top">
            <div className="left">
              <h1 className="title">user information</h1>
              <div className="person">
                 <img src={Rows.img}alt="" className="itemphoto"/>

              <div className="person-details">
                <h1 className="itemTitle">{Rows.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{Rows.email}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+2323 2323 23232</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Addr st. adress addre123</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Ghana</span>
                </div>
              </div>
              </div>
            </div>
            <div className="right">
              <Chart />
            </div>
          </div>

          <div className="buttom">
           <List />
          </div>
      </div>
    </div>
  )
}

export default SingleUser

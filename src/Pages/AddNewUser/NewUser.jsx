import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import { userinputs } from '../../formSource';

import profile from '../../Images/profile.png'
import './NewUser.css';

const NewUser = () => {

  const [file, setFile] = useState("")
  return (
   <div className='newUser'>
      <Sidebar />

      <div className="newUser-container">
         <Navbar />
        <div className="new-top">
          <h1 className="addNewUser">add new user</h1>
        </div>

        <div className="new-bottom">
          <div className="new-left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : profile
              }
              alt=""
            />
          </div>
          <div className="new-right">
            <form>
              <div className="formInput">
                 <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {userinputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))} 
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewUser

import React from 'react'
import './Statistics.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import Cards from '../../Components/Cards/Cards';


const Statistics = () => {
  return (
    <div className='statistics'>
      <Sidebar />

      <div className="main-statistics">
        <Navbar />
        <div className="analysis">
            <Cards />
        </div>
      </div>
    </div>
  )
}

export default Statistics

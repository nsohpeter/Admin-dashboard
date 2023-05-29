import React from 'react'
import './mainDashboard.css';
import Cards from '../Cards/Cards';
import List from '../TableList/List';

const MainDashboard = () => {
  return (
      <div className="mainDashboard">
         < Cards  />
         <h2>recent orders</h2>
         < List />
      </div>
  )
}

export default MainDashboard

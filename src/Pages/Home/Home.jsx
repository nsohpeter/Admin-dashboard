import React from 'react';
import './Home.css';
 
import MainDashboard from '../../Components/mainDashboard/MainDashboard';
import RightSide from '../../Components/RightSide/RightSide';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
  return (
    <main className='home'>
      <Sidebar />
       <div className="home-container">
        <Navbar />
         <div className="container">
          <MainDashboard />
          <RightSide />
         </div>
       </div>
      
    </main>
  )
}

export default Home

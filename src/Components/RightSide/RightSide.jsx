import React from 'react'
import './RightSide.css';
import Updates from '../Updates/Updates'
import CostumerReview from '../CostumerReview/CostumerReview';

const RightSide = () => {
  return (
    <div className='right-side'>
        <div>
          <h3>Updates</h3>
          <Updates />
        </div>
        <div style={{width:"100%"}}>
            <h3>costumer review</h3>
            <CostumerReview />
        </div>
    </div>
  )
}

export default RightSide
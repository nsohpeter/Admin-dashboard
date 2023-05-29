import React from 'react';
import './CompactCard.css';

import CountUp from 'react-countup'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion  } from 'framer-motion';

const CompactCard = ({ id,png, value, barValue, color,title, expanded, seTExpanded})=>{
        const layoutid = id;
    return(
        <motion.div 
        className="CompactCard"
        style={{background:color.backGround,
            boxShadow:color.boxShadow
        }}
        onClick = {()=>seTExpanded(!expanded)}
         layout = {layoutid}
        >
            <div className="radialbBar">
                <CircularProgressbar 
                 value={barValue}
                 text = {`${barValue}%`}
                />
                <span style={{fontSize:"2rem",fontWeight:700}}>{title}</span>
            </div>
            <div className="details">
             {png}
             <span>
               {value} 
            </span>
             <span>the last 24 hours</span>
            </div>
        </motion.div>
    )
}



export default CompactCard;

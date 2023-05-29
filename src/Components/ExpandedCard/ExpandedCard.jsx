
import React from "react";
import './ExpandedCard.css';
import { motion  } from 'framer-motion';

import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import Chart from "../Rechart/Chart";

const ExpandedCard  = ( {id,color, title, series, expanded, seTExpanded}) =>{
     const layoutid = id;
    return(
      <motion.div 
      className="ExpandedCard"
       style={{background:color.backGround,
            boxShadow:color.boxShadow
        }}
         layout = {layoutid}
      >
        <div className='icon'>
         <DisabledByDefaultIcon  onClick = { () => seTExpanded(!expanded)}
         style = {{fontSize:'2.5rem'}}
         />
        </div>
         <span>{title}</span>
         <div className="chartContainer">
           <Chart />
         </div>
         <span>last 24 hours</span>
      </motion.div>
    );
}


export default ExpandedCard;
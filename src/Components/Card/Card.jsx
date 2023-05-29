
import React, { useState } from 'react';

import './Card.css';

 import CompactCard from '../CompactCard/CompactCard';
 import ExpandedCard from '../ExpandedCard/ExpandedCard';
//import { LayoutGroup } from 'framer-motion';

import {  AnimateSharedLayout, AnimatePresence } from 'framer-motion';
 

const Card = ({...item}) => {
    const [expanded, seTExpanded] = useState(false)

  return (
    
      <AnimateSharedLayout>
      {expanded?(
       <ExpandedCard
       expanded = {expanded} 
       seTExpanded = {seTExpanded}  {...item} />
      ): <AnimatePresence>
     (

        <CompactCard
       expanded = {expanded}  
       seTExpanded = {seTExpanded}  {...item} /> 
     )    </AnimatePresence>
      }
    </AnimateSharedLayout>
   
  )
}

export default Card;




//  <LayoutGroup>
//       {expanded?(
//        <ExpandedCard
//        expanded = {expanded} 
//        seTExpanded = {seTExpanded}  {...item} />
//       ):(
//         <CompactCard
//        expanded = {expanded}  
//        seTExpanded = {seTExpanded}  {...item} /> 
//      ) 
//       }
//     </LayoutGroup> 
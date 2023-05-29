import React, { useState } from 'react'
import './ListItem.css';
import {SidebarData}  from '../../Data/Data';

const ListItem = () => {

    const [selected, setSelected] = useState(0)
  return (
    <div>
      {SidebarData.map((item, index) =>{
        const { icon, url, heading } = item
        return <li key={index} className = {selected ===index? 'listItem active' : 'listItem'} onMouseOver= {()=>setSelected(index)}
        >
             {icon}
           <a href={url}>{heading}</a>
        </li>
      })}
    </div>
  )
}

export default ListItem

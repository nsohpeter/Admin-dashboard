import React from 'react'
import './TableList.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
const row = [{
        id: 1,
        product: "mobile phone",
        image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
        costumer: "peter",
        date: "1st may",
        amount: 554,
        method: "online payment",
        status: "Approved"
    },
    {
        id: 2,
        product: "mobile phone",
        image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
        costumer: "peter",
        date: "1st may",
        amount: 554,
        method: "online payment",
        status: "pending"
    },
    {
        id: 3,
        product: "mobile phone",
        image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
        costumer: "peter",
        date: "1st may",
        amount: 554,
        method: "online payment",
        status: "Approved"
    },
    {
        id: 4,
        product: "mobile phone",
        image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
        costumer: "peter",
        date: "1st may",
        amount: 554,
        method: "online payment",
        status: "pending"
    },
    {
        id: 5,
        product: "mobile phone",
        image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
        costumer: "peter",
        date: "1st may",
        amount: 554,
        method: "online payment",
        status: "Approved"
    },
   

]


  return (
    <div>
     
    <TableContainer component={Paper} className = "table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Costumer</TableCell>
            <TableCell className="tableCell">Data</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWraper">
                  <img src={row.image} alt="" className='image' />
                   {row.product}
              </div>
              </TableCell>
              <TableCell className="tableCell">{row.costumer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     </div>
  )
}

export default List;

import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";

import './Datatable.css';

const Datatable = () => {
   const [data, setData] = useState(userRows)
   

   const handleDelete = (id) => {
    const temp =data.filter((item) => item.id !== id)
    setData(temp);
  };

    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellAction">
              <Link to={`/users/${params.row.id}`}   style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.row.id)}
              >
                Delete
              </div>
            </div>
          );
        },
      },
    ];

    return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link
          to="/users/new"
          className="link-new"
          style={{ textDecoration: "none" }}
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}

export default Datatable
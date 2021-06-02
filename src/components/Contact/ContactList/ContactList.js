import React from 'react';
import { DataGrid } from "@material-ui/data-grid";
import './ContactList.css';

const ContactList = ({ name, email, phone, birthday, outreachdate, company, position, notes}) => {
  
    const columns = [
      { field: "id", headerName: "Full Name", width: 150 },
      { field: "email", headerName: "Email", width: 120 },
      { field: "phone", headerName: "Phone", width: 150 },
      { field: "birthday", headerName: "Birthday", width: 150 },
      { field: "date of last outreach", headerName: "Date of last outreach", width: 150 },
      { field: "company", headerName: "Company", width: 150 },
      { field: "position", headerName: "Position", width: 150 },
      { field: "notes", headerName: "Notes", width: 150 },
    ];

    const rows = [

    ]

    return (
        <div className='contactListDetails'>
            <DataGrid columns={columns} rows={rows}/>
        </div>
    )
}

export default ContactList;

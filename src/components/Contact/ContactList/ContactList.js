import React from 'react';
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import './ContactList.css';

const useStyles = makeStyles({
  dataGrid: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    width: "1200px",
    margin: 'auto'
  },
});
const columns = [
  { field: "outreachdate", headerName: "Date of last outreach", width: 210 },
  { field: "id", headerName: "Full Name", width: 150 },
  { field: "position", headerName: "Position", width: 180 },
  { field: "company", headerName: "Company", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "birthday", headerName: "Birthday", width: 150 },
];

const ContactList = ({ name, email, phone, birthday, outreachdate, company, position}) => {
    const classes = useStyles();
    
    const rows = [
        {id: name, email: email, phone: phone, birthday: birthday, outreachdate: outreachdate, company: company, position: position}
    ]

    return (
        <DataGrid
          columns={columns}
          rows={rows}
          autoHeight={true}
          className={classes.dataGrid}
        />
    );
}

export default ContactList;

// filter model? filter by company or position

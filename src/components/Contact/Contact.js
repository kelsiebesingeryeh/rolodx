import React, { useState, useEffect } from 'react';
import sampleData from "../../data/sampleData";
import { DataGrid } from "@material-ui/data-grid";
import ContactList from './ContactList/ContactList';

const columns = [
    { field: "id", headerName: "Full Name" },
    { field: "email", headerName: "Email" },
    { field: "phone", headerName: "Phone" },
    { field: "birthday", headerName: "Birthday" },
    { field: "date of last outreach", headerName: "Date of last outreach" },
    { field: "company", headerName: "Company" },
    { field: "position", headerName: "Position" },
    { field: "notes", headerName: "Notes" },
];

const Contact = () => {
    console.log(sampleData);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        setContacts(sampleData);
    }, [])

    const contactsOnDisplay = contacts.map(contact => {
        return (
            <ContactList 
            key={contact.name}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            birthday={contact.birthday}
            outreachdate={contact['date of last outreach']}
            company={contact.company}
            position={contact.position}
            notes={contact.notes}
            />
        )
    })
    
    return (
        <>
        <h1>Contacts</h1>
        {contactsOnDisplay}
        </>
    )
}

export default Contact;
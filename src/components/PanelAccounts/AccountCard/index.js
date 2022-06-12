
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Contact from "../../../services/ServiceContact"

function AccountCard(props) {

    const [contact, setContact] = useState({})

    const {
        image, 
        title, 
        description,  
        createdAt, 
        id,
        contactId,
    } = props

    useEffect(() => {
        Contact.getContactDetail(contactId).then(contact => {
            setContact(contact)
        })
    }, [])


    return (

        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
            <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">{<Link to={`/account-detail/${id}`}>{title}</Link>}</p>
                    <div className="d-flex justify-content-between">
                        <p className="card-text text-muted">{createdAt}</p>
                    
                    </div>
                    <p>{contact.full_name}</p>
                    <p>{contact.phone}</p>
                    <p>{contact.email}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>

    )
}

export default AccountCard
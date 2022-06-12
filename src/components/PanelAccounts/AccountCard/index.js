
import React, { useState } from 'react'
import { Link } from "react-router-dom";


function AccountCard(props) {

    const {
        image, 
        title, 
        description,  
        createdAt, 
        id, 
        setAccounts
    } = props

    const [newComment, saveNewComment] = useState('')

    const onChange = e=>{
        saveNewComment(e.target.value)

        }


    return (

        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
            <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">{<Link to={`/account-detail/${id}`}>{title}</Link>}</p>
                    <div className="d-flex justify-content-between">
                    <p className="card-text text-muted">{createdAt}</p>
                    
                    </div>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>

    )
}

export default AccountCard
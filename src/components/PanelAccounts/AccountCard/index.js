
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Contact from "../../../services/ServiceContact"
import { Card, Img, CardBody, Row } from './styles'
import { dateFormatter } from '../../../utils/date'
import RowInfo from '../../UI/RowInfo'
import BurgerIconDelete from '../../UI/BurgerIconDelete'
function AccountCard(props) {

    const [contact, setContact] = useState({})

    const {
        image, 
        title, 
        description,  
        createdAt, 
        id,
        contactId,
        deleteAccount,
    } = props

    useEffect(() => {
        Contact.getContactDetail(contactId).then(contact => {
            setContact(contact)
        })
    }, [])



    return (
            <Card>
                <Img src={image}/>
                <CardBody>
                    <Row>
                        <h2 className="card-text">{<Link to={`/account-detail/${id}`}>{title}</Link>}</h2>

                        <BurgerIconDelete deleteItem={() => deleteAccount(id)}/>
                    </Row>


                    <RowInfo text= 'Creado' description={dateFormatter(createdAt)}/>
                    <RowInfo text= 'Contacto' description= {contact.full_name}/>
                    <RowInfo text= 'Teléfono' description= {contact.phone}/>
                    <RowInfo text= 'Email' description= {contact.email}/>
                    <RowInfo text= 'Descripción' description= {description}/>
                </CardBody>
            </Card>

    )
}

export default AccountCard
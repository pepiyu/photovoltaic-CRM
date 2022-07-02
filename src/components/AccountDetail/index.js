import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Account from '../../services/ServiceAccount'
import Contact from '../../services/ServiceContact'
import { Main, Header, ImgSpan, Panel1, Panel2, ActivityPanel, Row, Item } from  './styles'
import RowInfo from '../UI/RowInfo'
import { dateFormatter } from '../../utils/date'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import StageChip from '../UI/StageChip'
import ActivitiesComponent from './Activities';
import OpportunitiesComponent from './Opportunities';

const AccountDetail = () => {

    const [account, setAccount] = useState({})
    const [contact, setContact] = useState({})
    let { id } = useParams()

    useEffect(() => {

        Account.getAccountDetail(id)
        .then((account) => {
            setAccount(account)

            Contact.getContactDetail(account.contact_id).then((contact) => {
                setContact(contact)
    
            })

            
        })
        .catch((error) => {
            console.error(error)
        })


        


    }, [])


    


    const infoBasica = [
        {label: 'Descripción', value: account.description},
        {label: 'Address', value: account.address},
        {label: 'CUPS', value: account.cups_number},
        {label: 'Consumo Anual', value: account.consumption_yearly},
        {label: 'Representante', value: account.consumption_yearly},
        {label: 'Comisión', value: account.consumption_yearly},
        {label: 'Fecha de creación', value: dateFormatter(account.createdAt)},
        {label: 'Fecha de actualización', value: dateFormatter(account.updatedAt)},
        
    ]

    const documentacion = [
        {label: 'CIE', attached: account.CIE_file ? true : false, path: account.CIE_file},
        {label: 'Proyecto técnico', attached: account.CIE_file ? true : false, path: account.CIE_file},
        {label: 'Memoria técnica', attached: account.CIE_file ? true : false, path: account.CIE_file},
        {label: 'Factura', attached: account.CIE_file ? true : false, path: account.CIE_file},
    ]
/* 
    let stagesArray = []

    opportunities.forEach((opportunity) => {
        stagesArray.push(opportunity.stage_id)
    })

    let descriptionArray = []

    stages.forEach((stage) => {
        if (stagesArray.includes(stage.id)) {
            descriptionArray.push(stage.stage_description)
        }
    }) */




    return (

        <Main>
            <Header>
                <Row>
                    <h2>{account.title} </h2>
{/*                    {descriptionArray.map((stage) =>  <StageChip text={stage}/>)} */}
                </Row>
                
            </Header>

            <Panel1>

                <Item>

                    <h2> Información básica </h2>

                    {infoBasica.map((el) => <RowInfo text={el.label} description = {el.value}/>)}
                    
                </Item>

                <Item>
                    <h2> Documentación </h2>

                    {documentacion.map((el) => <RowInfo text={el.label} description = {el.attached ? <InsertDriveFileIcon/> : null}/>)}


                </Item>

                <Item>
                    <h2> Contacto </h2>

                    <RowInfo text= 'Nombre cliente' description = {contact.full_name}/>
                    <RowInfo text= 'Teléfono' description = {contact.phone}/>
                    <RowInfo text= 'Email' description = {contact.email}/>

                    
                </Item>
                <Item>

                    <h2> Mapa </h2>
                    <div>
                        <div>
                            <iframe width="100%" height="300" id="gmap_canvas" 
                            src={`https://maps.google.com/maps?q=${encodeURIComponent(account.address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                            frameBorder="0" 
                            scrolling="no" 
                            marginHeight="0" 
                            marginWidth="0"
                            ></iframe>
                        </div>
                    </div>

                </Item>




            </Panel1>

            <Panel2>
                <OpportunitiesComponent
                key={account.id}
                accountId={account.id}
                />


            </Panel2>
            <ImgSpan src={account.image}/>

            <ActivityPanel>
                <ActivitiesComponent
                    key={account.id}
                    accountId={account.id} 
                />


            </ActivityPanel>


                

        </Main>

    )
}

export default AccountDetail
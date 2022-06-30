import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Opportunities from '../../services/ServiceOpportunity'
import Activities from '../../services/ServiceActivity'
import Account from '../../services/ServiceAccount'
import Contact from '../../services/ServiceContact'
import Opportunity from './Opportunity'
import Activity from './Activity'
import ActivityForm from './ActivityForm';
import { Main, Header, ImgSpan, Panel1, Panel2, ActivityPanel, Row } from  './styles'
import RowInfo from '../UI/RowInfo'
import { dateFormatter } from '../../utils/date'
import CreateNewForm from '../UI/CreateNewForm'
import AddIcon from '@mui/icons-material/Add';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const TextFieldEls = [
    {label: 'Titulo', name: 'title', required: true},
    {label: 'Descripción', name: 'description', required: true},
    {label: 'Fecha de cierre', name: 'closing_date', required: true, type: 'date'},
    {label: 'Probabilidad', name: 'probability', required: true, type: 'number'},
    {label: 'Monto', name: 'amount', required: true, type: 'number'},

]

const InputFileEls = [
    /* {label: 'Presupuesto', name: 'quotation', required: false}, */
]

const SelectInputEls = [
]






const AccountDetail = () => {

    const [account, setAccount] = useState({})
    const [opportunities, setOpportunities] = useState([])
    const [activities, setActivities] = useState([])
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

        Opportunities.getOpportunity()
        .then((opportunities) => {
            const filteredById = opportunities.filter((opportunities) => { return opportunities.account_id === id})
            setOpportunities(filteredById)

        })
        .catch((error) => {
            console.error(error);
        })

        Activities.getActivity()
        .then((activities) => {
            const filteredById = activities.filter((activities) => { return activities.opportunity_id === id})
            setActivities(filteredById)
        })
        .catch((err) => {
            console.error(err)
        })
        


    }, [])

    const OpOnSubmit = (data) => {
        console.log(data)

        let dataX = {...data, account_id: account.id, oportunity_type_id: '62bdce7ad1070bd75ecbf0ed'}
        Opportunities.create(dataX).then(() => {
            let withNew = [...opportunities];
            withNew.push(dataX)
            setOpportunities(withNew)
        })
    
    }

    const deleteOportunity = (id) => {
        Opportunities.remove(id).then(() => {
            let without = opportunities.filter((opportunities) => { return opportunities.id !== id})
            setOpportunities(without)
        }
        ).catch((error) => {
            console.error(error)
        }
        )
    }

    const infoBasica = [
        {label: 'Descripción', value: account.description},
        {label: 'Fecha de creación', value: dateFormatter(account.created_at)},
        {label: 'Fecha de actualización', value: dateFormatter(account.updated_at)},
        {label: 'Address', value: account.address}
    ]

    return (

        <Main>
            <Header>
                <h2>{account.title}</h2>
                
            </Header>

            <Panel1>
                <h2> Información básica </h2>

                <RowInfo text= 'Descripción' description = {account.description}/>
                <RowInfo text= 'Address' description = {account.address}/>
                <RowInfo text= 'CUPS' description = {account.cups_number}/>
                <RowInfo text= 'Consumo Anual' description = {account.consumption_yearly}/>
                <RowInfo text= 'CIE' description = {<InsertDriveFileIcon/>}/>
                <RowInfo text= 'Proyecto técnico' description = {<InsertDriveFileIcon/>}/>
                <RowInfo text= 'Memoria técnica' description = {<InsertDriveFileIcon/>}/>

                <h2> Contacto </h2>

                <RowInfo text= 'Nombre cliente' description = {contact.full_name}/>
                <RowInfo text= 'Teléfono' description = {contact.phone}/>
                <RowInfo text= 'Email' description = {contact.email}/>

                <h2> Mapa </h2>
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe width="100%" height="500" id="gmap_canvas" 
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(account.address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                        frameborder="0" 
                        scrolling="no" 
                        marginheight="0" 
                        marginwidth="0"
                        ></iframe>
                    </div>
                </div>

            </Panel1>

            <Panel2>

                <Row>
                    <h2> Oportunidades </h2>

                    <CreateNewForm 
                    titulo={<AddIcon/>}
                    TextFieldEls={TextFieldEls}
                    InputFileEls={InputFileEls}
                    onSubmit={OpOnSubmit}
                    />

                </Row>


                {opportunities.map((opportunity, i) =>

                (

                    <Opportunity
                        title={opportunity.title}
                        description={opportunity.description}
                        closingDate={dateFormatter(opportunity.closing_date)}
                        probability={opportunity.probability}
                        amount={opportunity.amount}
                        AddIcon={dateFormatter(opportunity.createdAt)}
                        id={opportunity.id}
                        key={i}
                        deleteOportunity={() => deleteOportunity(opportunity.id)}
                    />
                )

                
                )}

            </Panel2>
            <ImgSpan src={account.image}/>

            <ActivityPanel>
                <h2> Actividades </h2>

                {
                    activities.map((activity) => 
                    
                    (
                        <Activity
                            dueDate={dateFormatter(activity.due_date)}
                            comment={activity.comment}
                            createdAt={dateFormatter(activity.createdAt)}
                            updatedAt={dateFormatter(activity.updatedAt)}
                            id={activity.id}
                        
                        />

                    )
                    )

                }

                <ActivityForm/>


            </ActivityPanel>


                

        </Main>

    )
}

export default AccountDetail
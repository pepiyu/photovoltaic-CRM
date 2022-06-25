import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Opportunities from '../../services/ServiceOpportunity'
import Activities from '../../services/ServiceActivity'
import Account from '../../services/ServiceAccount'
import Contact from '../../services/ServiceContact'
import Opportunity from './Opportunity'
import Activity from './Activity'
import ActivityForm from './ActivityForm';
import { Main, Header, ImgSpan, Panel1, Panel2, ActivityPanel } from  './styles'
import RowInfo from '../UI/RowInfo'
import { dateFormatter } from '../../utils/date'
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

    return (

        <Main>
            <Header>
                <h2>{account.title}</h2>
                
            </Header>

            <Panel1>
                <h2> Información básica </h2>

                <RowInfo text= 'Descripción' description = {account.description}/>
                <RowInfo text= 'Address' description = {account.address}/>

                <h2> Contacto </h2>

                <RowInfo text= 'Nombre cliente' description = {contact.full_name}/>
                <RowInfo text= 'Teléfono' description = {contact.phone}/>
                <RowInfo text= 'Email' description = {contact.email}/>

            </Panel1>

            <Panel2>
                <h2> Oportunidades </h2>

                {opportunities.map((opportunity) =>

                (

                    <Opportunity
                        title={opportunity.title}
                        description={opportunity.description}
                        closingDate={dateFormatter(opportunity.closing_date)}
                        probability={opportunity.probability}
                        amount={opportunity.amount}
                        createdAt={dateFormatter(opportunity.createdAt)}
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
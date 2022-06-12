import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Opportunities from '../../services/ServiceOpportunity'
import Account from '../../services/ServiceAccount'
import Opportunity from './Opportunity'

const AccountDetail = () => {

    const [account, setAccount] = useState({})
    const [opportunities, setOpportunities] = useState([])

    let { id } = useParams()

    useEffect(() => {

        Account.getAccountDetail(id).then((account) => {
            setAccount(account)
        })

        Opportunities.getOpportunity()
        .then((opportunities) => {
            const filteredById = opportunities.filter((opportunities) => { return opportunities.account_id === id})
            setOpportunities(filteredById)

        })
        .catch((error) => {
            console.error(error);
        })


    }, [])

    return (

        <div>
            <h2>{account.title}</h2>
            <img src={account.image} class="card-img-top" style={{height: "400px"}} alt="..."/>
            <p>{account.title}</p>
            <p>{account.description}</p>
            <p>{account.address}</p>


                {opportunities.map((opportunity) =>

                (

                    <Opportunity
                        title={opportunity.title}
                        description={opportunity.description}
                        closingDate={opportunity.closing_date}
                        probability={opportunity.probability}
                        amount={opportunity.amount}
                        createdAt={opportunity.createdAt}
                    />
                )

                
                )}
                

        </div>

    )
}

export default AccountDetail
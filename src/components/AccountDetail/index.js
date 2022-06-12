import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Opportunities from '../../services/ServiceOpportunity'
import Account from '../../services/ServiceAccount'

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
            <h2>Account Details</h2>
            <img src={account.image} class="img-fluid" alt="..."/>
            <p>{account.title}</p>
            <p>{account.description}</p>
            <p>{account.address}</p>

            <table class="table">
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>

                {opportunities.map((opportunity) =>
                
                <tr>
                    <td>{opportunity.title}</td>
                    <td>{opportunity.description}</td>
                    <td>{opportunity.closing_date}</td>
                    <td>{opportunity.probability}</td>
                    <td>{opportunity.amount}</td>
                    <td>{opportunity.createdAt}</td>
                </tr>
                )}
                
            </table>

        </div>

    )
}

export default AccountDetail
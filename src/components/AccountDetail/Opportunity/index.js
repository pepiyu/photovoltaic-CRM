import React from 'react'

const Opportunity = (props) => {

    const {
        title,
        description,
        closingDate,
        probability,
        amount,
        created,
    } = props

    return (

        <div>
            <h4>{title}</h4>
            <h5>{description}</h5>
            <p>{closingDate}</p>
            <p>{probability}</p>
            <p>{amount}</p>
            <p>{created}</p>


        </div>

    )
}

export default Opportunity
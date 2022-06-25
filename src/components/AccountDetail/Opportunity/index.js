import React from 'react'
import RowInfo from '../../UI/RowInfo'
import { OpItem } from './styles'
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

        <OpItem>
            <h3>{title}</h3>
            <RowInfo text= 'description' description= {description}/>
            <RowInfo text= 'Fecha cierre' description= {closingDate}/>
            <RowInfo text= 'Probabilidad' description= {probability+' %'}/>
            <RowInfo text= 'amount' description= {amount+' €'}/>
            <RowInfo text= 'Creado' description= {created}/>

        </OpItem>

    )
}

export default Opportunity
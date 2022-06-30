import React from 'react'
import RowInfo from '../../UI/RowInfo'
import { OpItem, Row } from './styles'
import BurgerIconDelete from '../../UI/BurgerIconDelete'

const Opportunity = (props) => {

    const {
        title,
        description,
        closingDate,
        probability,
        amount,
        createdAt,
        id,
        key,
        deleteOportunity,
    } = props




    return (

        <OpItem id={key}>

            <Row>
            <h3>{title}</h3>

            <BurgerIconDelete deleteItem={deleteOportunity}/>
            </Row>

           
            <RowInfo text= 'description' description= {description}/>
            <RowInfo text= 'Fecha cierre' description= {closingDate}/>
            <RowInfo text= 'Probabilidad' description= {probability+' %'}/>
            <RowInfo text= 'amount' description= {amount+' €'}/>
            <RowInfo text= 'Creado' description= {createdAt}/>

        </OpItem>

    )
}

export default Opportunity
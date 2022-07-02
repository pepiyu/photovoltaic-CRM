import React from 'react'
import RowInfo from '../../UI/RowInfo'
import { OpItem, Row } from './styles'
import BurgerIconDelete from '../../UI/BurgerIconDelete'
import StageChip from '../../UI/StageChip'
const Opportunity = (props) => {

    const {
        title,
        description,
        closingDate,
        probability,
        amount,
        createdAt,
        id,
        stage,
        key,
        deleteOportunity,
        opportunityType,
    } = props




    return (

        <OpItem id={key}>

            <Row>
            <h3>{title}</h3>

            <StageChip text={stage} />

            <BurgerIconDelete deleteItem={deleteOportunity}/>
            </Row>

           
            <RowInfo text= 'Oportunidad' description= {opportunityType}/>
            <RowInfo text= 'description' description= {description}/>
            <RowInfo text= 'Fecha cierre' description= {closingDate}/>
            <RowInfo text= 'Probabilidad' description= {probability+' %'}/>
            <RowInfo text= 'amount' description= {amount+' €'}/>
            <RowInfo text= 'Creado' description= {createdAt}/>

        </OpItem>

    )
}

export default Opportunity
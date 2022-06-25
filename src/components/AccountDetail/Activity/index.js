import React from 'react'
import RowInfo from '../../UI/RowInfo'
import { AcItem } from './styles'
const Activity = (props) => {

    const {
        dueDate,
        comment,
        createdAt,
        updatedAt,
        id,

    } = props


    return (
        <AcItem>
            <RowInfo text= 'id' description= {id}/>
            <RowInfo text= 'Creado' description= {createdAt}/>
            <RowInfo text= 'Fecha cierre' description= {dueDate}/>
            <RowInfo text= 'Comentario' description= {comment}/>
            <RowInfo text= 'Fecha modificación' description= {updatedAt}/>

        </AcItem>



    )
}

export default Activity
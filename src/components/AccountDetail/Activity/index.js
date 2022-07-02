import React from 'react'
import RowInfo from '../../UI/RowInfo'
import { AcItem, Comment, Date } from './styles'
const Activity = (props) => {

    const {
        dueDate,
        comment,
        createdAt,
        updatedAt,
        key,

    } = props


    return (
        <AcItem >
            <Date>{createdAt}</Date>
            <Comment>
                {comment}
            </Comment>

        </AcItem>



    )
}

export default Activity
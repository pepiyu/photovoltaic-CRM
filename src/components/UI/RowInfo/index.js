import React from 'react'
import { RowStyle } from './styles'
import { Label } from '../Label'

const RowInfo = ({text, description}) => (

    <RowStyle>
        <Label text={text}/> <p>{description}</p>
    </RowStyle>
)

export default RowInfo
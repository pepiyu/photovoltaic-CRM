import React from 'react'
import { Form, Input, Textarea } from '../../UI/Form/styles'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ActivityForm = () => {

    return (
        <Box
        component="form"
            sx={{
                display: 'block',
            }}
        >

            <TextField label="Comentario" type="textarea" FullWidth={true} rows="5"/>

            <Button> Enviar </Button>


        </Box>

    )

}

export default ActivityForm
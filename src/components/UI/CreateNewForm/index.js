import React, { useState } from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
const CreateNewForm = ({titulo, TextFieldEls, InputFileEls, onSubmit}) => {

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });

    const inputNameTextFieldEls = TextFieldEls.reduce((previ, current) => ({...previ, [current.name]: current.type === 'number' ? 0 : ''}), {})
    const InputNameFileEls = InputFileEls.reduce((previ, current) => ({...previ, [current.name]: ''}), {})
    
    const [formInput, setFormInput] = useState({...inputNameTextFieldEls, ...InputNameFileEls })

    console.log(formInput);
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const anchor = 'right'

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onSubmit(formInput);
      }

    const FormDrawer = (titulo, TextFieldEls, InputFileEls) => (
        <Box
        component="form"
          sx={{
            '& > :not(style)': { m: 1 },
            padding: '2rem',
            width: 500
        }}
          //onKeyDown={toggleDrawer(anchor, false)}
          noValidate
          autoComplete="off"
        >
    
            <h1>{titulo}</h1>

            {TextFieldEls.map(el => 

                
                <TextField 
                label={el.label} 
                name={el.name} 
                fullWidth={true} 
                required={el.required} 
                type={el.type ? el.type : 'text'}
                onChange={(e) => {
                    setFormInput({...formInput, [e.target.name]: e.target.value})
                }}
                />

                
                
            )}

            {InputFileEls.map(el => (

                <>
                    <InputLabel>{el.label}</InputLabel>
                    <Input 
                    label={el.label} 
                    name={el.name} 
                    type="file" 
                    fullWidth={true} 
                    required={el.required}
                    onChange={(e) => {
                        setFormInput({...formInput, [e.target.name]: e.target.value})
                    }}
                    />
                
                </>


            )


            )}
    
    
            <Button onClick={handleOnSubmit}> Enviar </Button>
          
          
        </Box>
      );






    return (

        <>
        
        <Button onClick={toggleDrawer(anchor, true)}>{titulo}</Button>
        <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
        >
            {FormDrawer(titulo, TextFieldEls, InputFileEls)}
        </SwipeableDrawer>
        </>


    )
}

export default CreateNewForm
import React, { useState } from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const   CreateNewForm = ({boton, titulo, TextFieldEls, InputFileEls, SelectFieldEls, onSubmit}) => {

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });

    const inputNameTextFieldEls = TextFieldEls.reduce((previ, current) => ({...previ, [current.name]: ''}), {})
    const InputNameFileEls = InputFileEls.reduce((previ, current) => ({...previ, [current.name]: ''}), {})
    const InputNameSelectEls = SelectFieldEls.reduce((previ, current) => ({...previ, [current.name]: ''}), {})
    
    const [formInput, setFormInput] = useState({...inputNameTextFieldEls, ...InputNameFileEls, ...InputNameSelectEls })

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
                size="small"
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

            {SelectFieldEls.map(el => (

            <>
                <InputLabel>{el.label}</InputLabel>
                <Select
                    size="small"
                    required={el.required}
                    name={el.name}
                    id="demo-simple-select"
                    label={el.label}
                    fullWidth={true}
                    onChange={(e) => {
                        setFormInput({...formInput, [e.target.name]: e.target.value})
                    }}
                    >
                    {el.options.map(option => (
                        <MenuItem value={option.value}>{option.label}</MenuItem>
                    ))}
                </Select>
                

            </>


            )


            )}



            {InputFileEls.map(el => (

                <>
                    <InputLabel>{el.label}</InputLabel>
                    <Input
                    size="small"
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
        
        <Button onClick={toggleDrawer(anchor, true)}>{boton}</Button>
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
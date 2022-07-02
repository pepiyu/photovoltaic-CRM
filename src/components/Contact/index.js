import { useEffect, useState } from 'react';
import {Container, Header, Body, ButtonDiv, Grid } from '../UI/Layout/styles'
import CreateNewForm from '../UI/CreateNewForm';
import ContactService from '../../services/ServiceContact'
import { DataGrid } from '@mui/x-data-grid';

const Contact = () => {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        ContactService.getContact().then((contacts) =>{
            setContacts(contacts)
        })
    }, [])

    const TextFieldEls = [
        {label: 'Nombre Completo', name: 'full_name', required: true},
        {label: 'Teléfono', name: 'phone', required: true},
        {label: 'Email', name: 'email', required: true},    
    
    ]
    
    const InputFileEls = [
    ]
    
    const SelectFieldEls  = [
    ]

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'full_name',
          headerName: 'Nombre Completo',
          width: 150,
          editable: true,
        },
        {
          field: 'phone',
          headerName: 'Teléfono',
          width: 200,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          editable: true,
        },
      ];
          
    
    const onSubmit = (data) => {
        ContactService.create(data).then((account) => {
            setContacts([account, ...contacts])
        })
        .catch((error) => {
            console.error(error)
        }
        )
    }

    return (
        <Container>
            <Header>
                <Grid>
                    <h2>Contactos</h2>
                    <ButtonDiv>
                        <CreateNewForm
                            boton='Crear nuevo contacto'
                            titulo='Crear nuevo contacto'
                            TextFieldEls={TextFieldEls}
                            InputFileEls={InputFileEls}
                            SelectFieldEls={SelectFieldEls}
                            onSubmit={onSubmit}
                            
                            />


                    </ButtonDiv>

                </Grid>

            </Header>

            <Body>
            <DataGrid
                rows={contacts}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
            />
            </Body>
        </Container>

    )
}

export default Contact
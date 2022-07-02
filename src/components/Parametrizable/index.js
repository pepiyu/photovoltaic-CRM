import { useEffect, useState } from 'react';
import {Container, Header, Body, ButtonDiv, Grid } from '../UI/Layout/styles'
import CreateNewForm from '../UI/CreateNewForm';
import ContactService from '../../services/ServiceContact'
import { DataGrid } from '@mui/x-data-grid';
import ServicesOpportunityTypes from '../../services/ServiceOpportunityTypes';
import ServiceStage from '../../services/ServiceStage';
import ServiceActivityTypes from '../../services/ServiceActivityTypes';

const Contact = () => {

    const [opportunityTypes, setOpportunityTypes] = useState([])
    const [stages, setStages] = useState([])
    const [activityTypes, setActivityTypes] = useState([])

    useEffect(() => {


        ServicesOpportunityTypes.getOpportunity().then((opportunityTypes) => {
            setOpportunityTypes(opportunityTypes)
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
          field: 'oportunity_type_description',
          headerName: 'Oportunidad',
          width: 150,
          editable: true,
        },
      ];
          
    
/*     const onSubmit = (data) => {
        ContactService.create(data).then((account) => {
            setContacts([account, ...opportunityTypes])
        })
        .catch((error) => {
            console.error(error)
        }
        )
    } */

    return (
        <Container>

            <Header>
                <Grid>
                    <h2>Parametrizable</h2>
                    <ButtonDiv>
{/*                         <CreateNewForm
                            boton='Crear nuevo contacto'
                            titulo='Crear nuevo contacto'
                            TextFieldEls={TextFieldEls}
                            InputFileEls={InputFileEls}
                            SelectFieldEls={SelectFieldEls}
                            onSubmit={onSubmit}
                            
                            /> */}


                    </ButtonDiv>

                </Grid>

            </Header>

            <Body>
            <DataGrid
                rows={opportunityTypes}
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
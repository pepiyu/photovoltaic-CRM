import React, {useState, useEffect } from 'react';
import AccountCard from './AccountCard'
import SearchBar from '../SearchBar';
import Account from '../../services/ServiceAccount'
import {Container, Header, Cards, ButtonDiv, Grid, AccountForm } from './styles'

import CreateNewForm from '../UI/CreateNewForm';


function PanelAccounts() {

    const [accounts, setAccounts] = useState([])
    const [resetFilter, setResetFilter] = useState(false)
    const [search, setSearch] = useState("")


    useEffect(() => {
        Account.getAccount().then((accounts) =>{ 
            setAccounts(accounts)
        
        })

    }, [])


    
    const filteredAccount = search === '' ? accounts : accounts.filter(account => account.title.toLowerCase().includes(search))


    const TextFieldEls = [
        {label: 'Titulo', name: 'title', required: true},
        {label: 'Descripción', name: 'description', required: true},
        {label: 'Dirección completa', name: 'address', required: true},
        {label: 'CUPS', name: 'cups_number', required: false},
        {label: 'Tension', name: 'tension', required: false},
        {label: 'Representación', name: 'representation', required: false},
        {label: 'Consumo Anual', name: 'consumption_yearly', required: false},
        {label: 'Comisión', name: 'commission', required: false},
        {label: 'Actividad', name: 'activity_description', required: false},
    
    
    ]
    
    const InputFileEls = [
        {label: 'Imagen', name: 'img', required: false},
        {label: 'Proyecto técnico', name: 'project_file', required: false},
        {label: 'Memoria técnica', name: 'memoria_file', required: false},
    ]

    const onSubmit = (data) => {
        Account.create(data).then((account) => {
            setAccounts([account, ...accounts])
        })
        .catch((error) => {
            console.error(error)
        }
        )
    }

    const deleteAccount = (id) => {
        Account.remove(id).then(() => {
            let without = accounts.filter((account) => { return account.id !== id})
            setAccounts(without)
        }
        ).catch((error) => {
            console.error(error)
        }
        )
    }

    return (
        <Container>
            <Header>
                <Grid>
                    <h2>Cuentas</h2>
                    <ButtonDiv>

                        <CreateNewForm 
                        titulo='Crear cuenta nueva'
                        TextFieldEls={TextFieldEls}
                        InputFileEls={InputFileEls}
                        onSubmit={onSubmit}
                        
                        />



                    </ButtonDiv>

                </Grid>


                <SearchBar
                search={search}
                setSearch={setSearch}
                resetFilter={resetFilter}
                setResetFilter={setResetFilter}
                />

            </Header>

            <Cards>
                {accounts.length > 0 ?
                    (
                    <>
                        {filteredAccount.map((searchedAccounts, index) => 
                        
                        (
                            
                            <AccountCard
                                key={index}
                                title={searchedAccounts.title}
                                createdAt={searchedAccounts.createdAt}
                                image={searchedAccounts.image}
                                address={searchedAccounts.address}
                                contactId={searchedAccounts.contact_id}
                                id={searchedAccounts.id}
                                deleteAccount={deleteAccount}
                            />

                        )

                        )}
                    </>
                    
                    )  : 'Loading...'
                
                }
            </Cards>

            <AccountForm/>

        
        </Container>
    )
        
}


export default PanelAccounts
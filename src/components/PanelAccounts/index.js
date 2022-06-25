import AccountCard from './AccountCard'
import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar';
import Account from '../../services/ServiceAccount'
import {Container, Header, Cards, ButtonDiv, Grid, AccountForm } from './styles'
import { Button } from '../UI/Form/styles'
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


    return (
        <Container>
            <Header>
                <Grid>
                    <h2>Cuentas</h2>
                    <ButtonDiv> 
                        <Button>Crear cuenta nueva</Button>

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
                                setAccounts={setAccounts}
                                id={searchedAccounts.id}
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
import AccountCard from './AccountCard'
import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar';
import Account from '../../services/ServiceAccount'
  

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
        <>

            <SearchBar
            search={search}
            setSearch={setSearch}
            resetFilter={resetFilter}
            setResetFilter={setResetFilter}
            />

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
                                setAccounts={setAccounts}
                                id={searchedAccounts.id}
                            />

                    )

                    )}
                </>
                
                )  : 'Loading...'
            
            }
        
        </>
    )
        
}


export default PanelAccounts
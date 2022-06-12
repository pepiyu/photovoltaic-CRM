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
        <div className="text-center pb-3">

            <h2>Accounts</h2>
        </div>


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
                                contactId={searchedAccounts.contact_id}
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
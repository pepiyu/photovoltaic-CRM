import SearchBar from './components/SearchBar.js';
import PanelAccounts from './components/PanelAccounts';
import React, { useState } from 'react';

function Home() {

    const [searchValue, setSearchValue] = useState('')



    return (
        <>
            <SearchBar/>
            
            <PanelAccounts 
            searchValue={searchValue}/>
        </>
    )
}

export default Home
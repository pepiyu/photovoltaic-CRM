import SearchBar from './components/SearchBar.js';
import PostsList from './PostsList.js';
import React, { useState } from 'react';

function Home() {

    const [searchValue, setSearchValue] = useState('')



    return (
        <>
            <SearchBar/>
            
            <PostsList 
            searchValue={searchValue}/>
        </>
    )
}

export default Home
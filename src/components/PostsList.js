import Post from './Post.js'
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar.js';
import Account from '../services/ServiceAccount'


function PostsList(props) {

    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        Account.getAccount().then((accounts) =>{ 
            setAccounts(accounts)
            console.log(accounts);
        
        })

    }, [])

    const [search, setSearch] = useState("")


    const { onChangeComment, posts, setPosts, resetFilter, setResetFilter} = props
    
    const filteredPost = search === '' ? posts : posts.filter(post => post.text.toLowerCase().includes(search))
    return (
    <>

            <SearchBar
            search={search}
            setSearch={setSearch}
            resetFilter={resetFilter}
            setResetFilter={setResetFilter}
            />

        {posts.length > 0 ?
            (
                <>
                {filteredPost.map((searchedPosts, index) => 

                <Post
                key={index}
                text={searchedPosts.text}
                author={searchedPosts.author.name}
                createdAt={searchedPosts.createdAt}
                image={searchedPosts.image}
                likes={searchedPosts.likes}
                comments={searchedPosts.comments}
                onChangeComment={onChangeComment}
                setPosts={setPosts}
                id={searchedPosts.id}
                />
                )}
                </>
                
            )  : 'Loading...'
            
            }
        
        </>
    )
        
}


export default PostsList
import Post from './Post.js'
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar.js';


function PostsList(props) {

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
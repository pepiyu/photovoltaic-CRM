
import Comments from './Comments.js'
import React, { useState } from 'react'
import {createComment, getPosts} from '../services/API.js'



function Post(props) {

    const {
        image, 
        title, 
        text, 
        createdAt, 
        comments, 
        likes, 
        id, 
        setAccounts} = props

    const [newComment, saveNewComment] = useState('')

    const onChange = e=>{
        saveNewComment(e.target.value)

        }

    const onSubmit = e=>{

        e.preventDefault()

        const body = {
            "text": newComment
        }

        if (e.target.value !== '') {
            createComment(id, body).then(response => {
                getPosts()
                .then(response => {
                    setAccounts(response)
                })
            }
            )
            .catch(err => {
                console.log(err);
            })

        }


    }


    return (

        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
            <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                    <p className="card-text text-muted">{createdAt}</p>
                    
                    </div>
                    <p className="card-text">{text}</p>
                    <div name="comment-block" className="my-2">
                        <div name="comment-text-area" className="my-2">

                            <form onSubmit={onSubmit}>
                                <textarea className="form-control my-1; width: 100%;" value={newComment} name="commentArea" cols="30" rows="3" onChange={onChange}></textarea>
                                <div className="d-flex my-2" 
                                style={{justifyContent: 'flex-end'}}
                                >
                                    <button type="submit" className="btn" name="replies"
                                    style={{justifyContent: 'flex-end'}}
                                    >Reply</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Post
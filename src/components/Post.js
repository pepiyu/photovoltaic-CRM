
import Comments from './Comments.js'
import React, { useState } from 'react'
import {createComment, giveLike, getPosts} from '../services/API.js'



function Post(props) {

    const {image, author, text, createdAt, comments, likes, id, setPosts} = props

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
                    setPosts(response)
                })
            }
            )
            .catch(err => {
                console.log(err);
            })

        }


    }

    function addLike(id) {

        giveLike(id)
          .then(
            getPosts()
            .then(response => {
                setPosts(response)
            })
            )
            .catch(err => {
                console.log(err);
            })
    }


    return (

        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
            <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                    <p className="card-text text-muted">{createdAt}</p>
                    <a className="btn" onClick={() => {addLike(id)}} name="likes"><i className="fas fa-heart" style={{textAlign: 'right'}}></i> {likes} likes</a>
                    
                    </div>
                    <p className="card-text fw-bold">{author}</p>
                    <p className="card-text">{text}</p>
                    <a className="text-muted" name="comments"><i className="fas fa-comments"></i> comments({comments.length})</a>
                    <div name="comment-block" className="my-2">
                        <div name="comments-list" className="my-2">


                        {comments.length > 0 ? (
                            comments.map((comment, index) =>
                            <Comments key={index} author={comment.user.name} comment={comment.text}/>
                        )) : null}
                        

                        </div>
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
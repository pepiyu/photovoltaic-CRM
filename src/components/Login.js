import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom'
import useSetUser from '../hooks/useSetUser'
import { setStorageToken } from '../services/helpers'
import Auth from '../services/ServiceAuth'
import Account from '../services/ServiceAccount'

function Login({setLoggedIn}) {

    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const setUser = useSetUser()


    const onSubmit = (e) => {
        e.preventDefault()

        if (e.target.email.value !== '' && e.target.password.value !== '') {

            const body = {
                email: e.target.email.value,
                password: e.target.password.value,
            }

            Auth.loginUser(body)
            .then((token) => {
                if(!token){
                    navigate('/login')
                    
                } else {
                    
                    setUser(token)
                    setLoggedIn(true)
                    navigate('/')
                }

                
            })
            .catch(err => {
                if (err.response.status === 401) {
                    setError(true)
                    navigate('/login')
                    
                }else 
                if (err.response.status === 400) {
                    setError(true)
                }
                
            })
        }

        else

        {
            e.target.username.classList += ' is-invalid'
            setError(true)
        }

    }

    return (

        <div className="row">
            <div id="log-in" className="col-12 col-md-6 offset-md-3">

                <div className="card">

                    <form onSubmit={onSubmit} className="p-5">
                        <div className="col-12 mb-2">
                            <input type="text" 
                            className='form-control'
                            placeholder="email"
                            name="email"
                            />
                            
                        </div>
                        <div className="col-12 mb-2">
                            <input type="password" 
                            className='form-control'
                            placeholder="password"
                            name="password"
                            />

                        </div>
                        <div className={error === true ? "invalid-feedback d-block" : "invalid-feedback "} >
                        Invalid username or password
                        </div>
                        <div className="col-12 mb-2">
                            <button type="submit" id="signin-btn">Sign in</button>

                        </div>
                    </form>

                </div>

            </div>

        </div>
    )
}

export default Login
import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";



const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleUsernameChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }


    const navigate = useNavigate()


    const handleLogin = async () => {

        fetch('/api/sessions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(res => res.json())
            .then(res => {
                //console.log('logged in successfully')
                if (res.error) {
                    handleError(res.error)
                } else {

                    navigate('/blog/home')
                }
            })
    }

    const handleError = (errorMessage) => {
        setErrorMessage(errorMessage)
    }
    return (
        <div className="App">
            <div className='container'>
                <div className='login'>
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder='email' onChange={handleUsernameChange} />
                        <input type="password" placeholder='password' onChange={handlePasswordChange} />

                        <button type="button" onClick={() => handleLogin()}> Login</button>

                        {errorMessage && errorMessage.length > 0 &&
                            <p style={{color: 'red'}}>{errorMessage}</p>
                        }
                        <span>Don't have an account? <Link to="/blog/signup">Signup</Link></span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";



const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('')

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleBackgroundChange = (e) => {
        console.log(e.target.value);
        setBackgroundColor(e.target.value)
    }

    const navigate = useNavigate()

    const handleSignup = async () => {

        fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password,
                email,
                backgroundColor
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    // navigate('blog/signup')
                    handleError(res.error)
                } else {
                    navigate('/')
                }
            })
    }

    const handleError = (errorMessage) => {
       setErrorMessage(errorMessage)
    }


    return (
        <div className="App">
            <div className='container'>
                <div className='signup'>
                    <h1>Signup</h1>
                    <form>
                        <input type="text" placeholder='username' onChange={handleUsernameChange} />
                        <input type="email" placeholder='email' onChange={handleEmailChange} />
                        <input type="password" placeholder='password' onChange={handlePasswordChange} />
                        <label for="colors">Choose a Color:</label>
                        <select name="colors" id="colors" onChange={handleBackgroundChange}>
                        <option value="">None</option>
                        <option value="beige" >Beige</option>
                        <option value="aliceblue">Alice blue</option>
                        <option value="bisque">Bisque</option>
                        <option value="burlywood">Burlywood</option>
                        <option value="lightcyan">Light cyan</option>
                        <option value="lightpink">Light pink</option>
                        <option value="lightgrey">Light grey</option>
                        <option value="ivory">Ivory</option>
                        <option value="lavender">Lavender</option>
                        </select>
                        <button type="button" onClick={() => handleSignup()}>Sign Up</button>
                        {errorMessage && errorMessage.length > 0 &&
                            <p style={{color: 'red'}}>{errorMessage}</p>
                        }
                        <span>Have an account? <Link to="/">Login</Link></span>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Signup
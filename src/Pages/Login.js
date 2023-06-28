import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";



const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => res.json())
        .then(res =>  {
            //console.log('logged in successfully')
            if(res.error) {
               navigate('/')
               handleError(res.error)
            } else {
                
                navigate('/blog/home')
            }
        })
    }
    
    const handleError = (errorMessage) => {
        document.querySelector('p').innerHTML =  `
        <p style='color: red;'>${errorMessage}</p>
        ` + document.querySelector('p').innerHTML
    }
    return (
        <div className='login'>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='username' onChange={handleUsernameChange}/>
                <input type="password" placeholder='password' onChange={handlePasswordChange}/>
                
                <button type="button" onClick={() => handleLogin()}> Login</button>
                  
                <p>{handleError}</p>
                <span>Don't have an account? <Link to="/blog/signup">Signup</Link></span>
            </form>
        </div>
    )
}

export default Login
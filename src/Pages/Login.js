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
        
        fetch('http://localhost:3001/api/sessions', {
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
               navigate('/login')
              
            } else {
                
                navigate('/')
            }
        })
    }
    
    function handleError(errorMessage) {
        document.querySelector('#page').innerHTML =  `
        <p style='color: red;'>${errorMessage}</p>
        ` + document.querySelector('#page').innerHTML
    }
    return (
        <div className='login'>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='username' onChange={handleUsernameChange}/>
                <input type="password" placeholder='password' onChange={handlePasswordChange}/>
                
                <button type="button" onClick={() => handleLogin()}> Login</button>
                
             
                <span>Don't have an account? <Link to="/signup">Signup</Link></span>
            </form>
        </div>
    )
}

export default Login
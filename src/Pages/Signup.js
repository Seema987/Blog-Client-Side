import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";



const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
                if(res.error) {
                    navigate('/signup')
                   
                 } else {
                     
                     navigate('/login')
                 }
            })
    }

    return (
        <div className='signup'>
            <h1>Signup</h1>
            <form>
                <input type="text" placeholder='username' onChange={handleUsernameChange} />
                <input type="email" placeholder='email' onChange={handleEmailChange} />
                <input type="password" placeholder='password' onChange={handlePasswordChange} />
                <label for="colors">Choose a Color:</label>
                <select name="colors" id="colors"  onChange={handleBackgroundChange}>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                    <option value="grey">Grey</option>
                    <option value="Blue">Blue</option>
                </select>
                <button type="button" onClick={() => handleSignup()}>Sign Up</button>
                
            </form>
            <span>Have an account? <Link to="/login">Login</Link></span>
        </div>
    )
}

export default Signup
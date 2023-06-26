import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='signup'>
            <h1>Signup</h1>
            <form action="">
                <input type="text" placeholder='username' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <button>Sign Up</button>
                
                <span>Have an account? <Link to="/login">Login</Link></span>
            </form>
        </div>
    )
}

export default Signup
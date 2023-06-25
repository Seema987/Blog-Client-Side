import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login'>
            <h1>Login</h1>
            <form action="">
                <input type="text" placeholder='username' />
                <input type="password" placeholder='password' />
                <button>Login</button>
               
                <span>Don't you have an account? <Link to="/signup">Signup</Link></span>
            </form>
        </div>
    )
}

export default Login
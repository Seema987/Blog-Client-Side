import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">Logo</div>
                <div className="links">
                <Link className='link' to='/test/home'>
                        <h6>HOME</h6>
                    </Link>
                    <Link className='link' to='/test/?  cat=product'>
                        <h6>PRODUCT</h6>
                    </Link>
                    <Link className='link' to='/test/?  cat=cinematic'>
                        <h6>CINEMATIC</h6>
                    </Link>
                    <Link className='link' to='/test/?  cat=vintage'>
                        <h6>VINTAGE</h6>
                    </Link>
                    <Link className='link' to='/test/?  cat=abstract'>
                        <h6>ABSTRACT</h6>
                    </Link>
                    <Link className='link' to='/test/?  cat=design'>
                        <h6>DESIGN</h6>
                    </Link>
                    <Link className='link' to='/test/?  cat=travel'>
                        <h6>TRAVEL</h6>
                    </Link>
                    <Link className='link' to='/test/?  cat=potrait'>
                        <h6>POTRAIT</h6>
                    </Link>
                    <Link className='link' to='/test/?  cat=nature'>
                        <h6>NATURE</h6>
                    </Link>
                    <span>Seema</span>
                    <Link to="/">
                    <span>Logout</span>
                    </Link>
                    <span className='write'>
                        <Link className='link' to="/test/article">Create</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
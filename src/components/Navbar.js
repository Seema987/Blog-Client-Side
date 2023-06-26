import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">Logo</div>
                <div className="links">
                    <Link className='link' to='/?  new-collection'>
                        <h6>PRODUCT</h6>
                    </Link>
                    <Link className='link' to='/?  new-collection'>
                        <h6>CINEMATIC</h6>
                    </Link>
                    <Link className='link' to='/?  new-collection'>
                        <h6>VINTAGE</h6>
                    </Link>
                    <Link className='link' to='/?  new-collection'>
                        <h6>ABSTRACT</h6>
                    </Link>
                    <Link className='link' to='/?  new-collection'>
                        <h6>DESIGN</h6>
                    </Link>
                    <Link className='link' to='/?  new-collection'>
                        <h6>TRAVEL</h6>
                    </Link>
                    <Link className='link' to='/?  new-collection'>
                        <h6>POTRAIT</h6>
                    </Link>
                    <Link className='link' to='/?  new-collection'>
                        <h6>NATURE</h6>
                    </Link>
                    <span>Seema</span>
                    <span>Logout</span>
                    <span className='write'>
                        <Link className='link' to="article">Create</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
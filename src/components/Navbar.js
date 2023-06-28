import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {

    const navigate = useNavigate()
    const logOut = () => {

        fetch(`/api/sessions`, {
            method: 'DELETE'
        })
            .then(() => {
                navigate('/')

            })
    }
    return (
        <div className='navbar'>
            <div className="container">
                <img className="logo" src="https://i.pinimg.com/750x/c5/81/41/c58141e5805eeb812e15e500decb817f.jpg" />
                <div className="links">
                    <Link className='link' to='/blog/home'>
                        <h6>HOME</h6>
                    </Link>
                    <Link className='link' to='/blog/?  cat=product'>
                        <h6>PRODUCT</h6>
                    </Link>
                    <Link className='link' to='/blog/?  cat=cinematic'>
                        <h6>CINEMATIC</h6>
                    </Link>
                    <Link className='link' to='/blog/?  cat=vintage'>
                        <h6>VINTAGE</h6>
                    </Link>
                    <Link className='link' to='/blog/?  cat=abstract'>
                        <h6>ABSTRACT</h6>
                    </Link>
                    <Link className='link' to='/blog/?  cat=design'>
                        <h6>DESIGN</h6>
                    </Link>
                    <Link className='link' to='/blog/?  cat=travel'>
                        <h6>TRAVEL</h6>
                    </Link>
                    <Link className='link' to='/blog/?  cat=potrait'>
                        <h6>POTRAIT</h6>
                    </Link>
                    <Link className='link' to='/blog/?  cat=nature'>
                        <h6>NATURE</h6>
                    </Link>
                    <span>{props.user.name}</span>
                    <span onClick={logOut}>Logout</span>


                    <span className='write'>
                        <Link className='link' to="/blog/article">Create</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
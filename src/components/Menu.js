import React from "react";
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


const Menu = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('/api/blogs', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(res => {
                setPosts(res.posts);
            })
    }, [])


    return (
        <div className="menu">
            <h1>Other Post You May Like</h1>
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <Link to={`/blog/post/${post.id}`}>Read More</Link>
                    </div>
            ))}

        </div>
    )
}

export default Menu
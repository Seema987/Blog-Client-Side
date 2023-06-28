import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser';



const Home = () => {
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
        <div className='home'>
            <div className="posts">
                {posts && posts.map(post => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="image" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/blog/post/${post.id}`}>
                            </Link>
                            <h1>{post.title}</h1>
                            <p className='desc' >{post.description && parse(post.description)}</p>
                            <p className='date'>Posted on: {post.date}</p>
                         
                            <Link to={`/blog/post/${post.id}`}>Read More</Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Home





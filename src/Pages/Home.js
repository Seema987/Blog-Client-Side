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
    


        const deletePost =  (id) => {
            fetch(`/api/blogs/${id}/delete`, { method: 'DELETE' });
            console.log('Delete successful');
            const filteredPost  = posts.filter(post => post.id != id)
            setPosts(filteredPost)
        }
       
   


    return (
        <div className='home'>
            <div className="posts">
                {posts && posts.map(post => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="image" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/test/post/${post.id}`}>
                            </Link>
                            <h1>{post.title}</h1>
                            <p>{post.description && parse(post.description)}</p>
                            <p>Posted on: {post.date}</p>
                            <button onClick={() => deletePost(post.id)}>Delete</button>
                            <Link to={`/test/post/${post.id}`}>Read More</Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Home





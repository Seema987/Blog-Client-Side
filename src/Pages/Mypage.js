import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Menu from '../components/Menu'
import parse from 'html-react-parser';
import { useNavigate } from "react-router-dom";


const Mypage = () => {

    const [comments, setComments] = useState([])
    const { id } = useParams()
    const [post, setPost] = useState({})
    const [userComment, setUserComment] = useState('')

    useEffect(() => {
        fetch(`/api/blogs/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(res => {
                setPost(res.post);
            })
        fetch(`/api/blogs/${id}/comments`).then(res => res.json()).then(res => setComments(res.comments));
    }, [id])

    const handleCommentChange = (e) => {
        setUserComment(e.target.value)
    }


    const handleAddComment = async () => {
        const postComment = {
            user_comment: userComment,
            post_id: id,
            user_id: 1
        }
        fetch(`/api/blogs/${id}/comments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postComment)
        })
            .then((res) => res.json())
            .then((data) => setComments([...comments, data.comments]))
            .catch((error) => console.error("Error:", error))
    }

    const navigate = useNavigate()

    const deletePost = () => {
        fetch(`/api/blogs/${id}/delete`, { method: 'DELETE' });
        console.log('Delete successful');
        
        navigate('/blog/home')
       
    }
   

    return (
        <div className='single'>
            
            <div className="content">
            <h1>{post.title} </h1>
                <img src={post.img} alt="" />
                
                <div className="user">
                    <img src={post.img} alt="" />

                    <div className="info">
                        <span>Seema</span>
                        <p>Posted on {post.date}</p>
                        
                    </div>
                    
                    
                    <div className="edit">
                        <Link to={`/blog/editarticle/${id}`}>
                            <button>Edit</button>
                        </Link>
                        <button onClick={deletePost}>Delete</button>
                    </div>
                    
                </div>
                <p>{post.description && parse(post.description)}</p>
                <label for="" >Comment:</label>
           
                <textarea onChange={handleCommentChange} name="user_comment" id="add_comment" rows="3" cols="5"></textarea>
                <button className='submit' onClick={handleAddComment} >Submit</button>             

                <ul className='commentContainer'>
                        {comments && comments.map(comment => {
                           return <li>{comment.user_comment}</li>
                        })}
                    </ul>   
          
                   
            </div>
            <Menu />
        </div>

    )
}

export default Mypage




import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Menu from '../components/Menu'


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

    return (
        <div className='single'>
            <h1>{post.title} </h1>
            <div className="content">
                <img src={post.img} alt="" />
                <div className="user">
                    <img src={post.img} alt="" />


                    <div className="info">
                        <span>Seema</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/test/article?edit=${id}`}>
                            <button>Edit</button>
                        </Link>
                        <button>Delete</button>
                        <label for="" >Comment:</label>
                        <textarea onChange={handleCommentChange} name="user_comment" id="add_comment" rows="3" cols="5"></textarea>
                        <button onClick={handleAddComment} >Submit</button>
                    </div>

                </div>
                <ul>
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




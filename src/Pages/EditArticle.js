import React, { useState, useEffect } from 'react'
import ReactQuill, { displayName } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Link, useParams } from 'react-router-dom'
import parse from 'html-react-parser';

const EditArticle = () => {

    const [value, setValue] = useState('')
    const [desc, setDesc] = useState('')
    const [cat, setCat] = useState('')
    const [date, setDate] = useState('')
    const [imgLink, setImgLink] = useState('')
    const [post, setPost] = useState({})
    const { id } = useParams()

    const handleTitleChange = (e) => {
        setPost({...post, title: e.target.value})
    }

    const handleImgLink = (e) => {
        setPost({...post, imgLink: e.target.value})
    }

    const handleDescChange = (e) => {
        setPost({...post, description: e})
    }

    // const handleImgChange = (e) => {
    //     setImg(e.target.files[0])
    // }

    const handleDateChange = (e) => {
        setPost({...post, date: e.target.value})
    }
    const handleCatChange = (e) => {
        setCat(e.target.value)
    }

    const handleEditPosts = async () => {
        
        fetch(`/api/blogs/${id}/update`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        })
            .then(post => {
           
            })
    }

    useEffect(() => {
        fetch(`/api/blogs/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setPost(res.post);
            })
        }, [])



return (
    <div className='add'>
        <div className="content">
            <input type="text" placeholder='Title' value={post.title} onChange={handleTitleChange} />
            <div className="editorContainer">
                <ReactQuill className="editor" theme='snow' value={post.description} onChange={handleDescChange} />
            </div>
        </div>
        <div className="menu">
            <div className="item">

                {/*<input style={{ display: "none" }} type="file" id="file" name=""  />*/}
               {/* <label className='file' htmlFor="file">Upload Image</label>*/}
                <label>Upload Image Link:
                    <input type="text" value={post.img} onChange={handleImgLink}/>
                </label>
                <label>Date:
                    <input type="date" value={post.date} onChange={handleDateChange}/>
                </label>
                <h1>Update</h1>
                <div className="buttons">
                    {/* <button>Save as draft</button> */}
                    <Link to='/blog/home'><button onClick={handleEditPosts}>Update</button></Link>
                </div>
            </div>
            <div className="item">
                <h1>Category</h1>
                <input type="radio" name="cat" value="prodcut" id="product"  />
                <label htmlFor="product">Product</label>
                <input type="radio" name="cat" value="cinematic" id="cinematic"  />
                <label htmlFor="cinematic">Cinematic</label>
                <input type="radio" name="cat" value="vintage" id="vintage"  />
                <label htmlFor="vintage">Vintage</label>
                <input type="radio" name="cat" value="abstract" id="abstract"  />
                <label htmlFor="abstract">Abstract</label>
                <input type="radio" name="cat" value="design" id="design"  />
                <label htmlFor="design">Design</label>
                <input type="radio" name="cat" value="travel" id="travel"  />
                <label htmlFor="travel">Travel</label>
                <input type="radio" name="cat" value="potrait" id="potrait"  />
                <label htmlFor="potrait">Potrait</label>
                <input type="radio" name="cat" value="nature" id="nature"  />
                <label htmlFor="nature">Nature</label>
            </div>

        </div>
    </div>
)
}

export default EditArticle
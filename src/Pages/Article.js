import React, { useState } from 'react'
import ReactQuill, { displayName } from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Article = () => {
    const [value, setValue] = useState('')
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [img, setImg] = useState('')
    const [cat, setCat] = useState('')
    const [date, setDate] = useState('')
    const [imgLink, setImgLink] = useState('')


    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleImgLink = (e) => {
        setImgLink(e.target.value)
    }

    // const handleDescChange = (e) => {
    //     //setDesc(e.target.value)
    //     console.log(e.target)
    // }

    const handleImgChange = (e) => {
        setImg(e.target.files[0])
    }

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }
    const handleCatChange = (e) => {
        setCat(e.target.value)
    }

    const handleCreatePost = async () => {
        const postData = {
            title: title,
            desc: desc,
            img: imgLink,
            date: date
        }
        fetch('http://localhost:3000/api/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.error("Error:", error))
    }


    return (
        <div className='add'>
            <div className="content">
                <input type="text" placeholder='Title' onChange={handleTitleChange} />
                <div className="editorContainer">
                    <ReactQuill className="editor" theme='snow' value={desc} onChange={setDesc} />
                </div>
            </div>
            <div className="menu">
                <div className="item">

                    <input style={{ display: "none" }} type="file" id="file" name="" onChange={handleImgChange} />
                    <label className='file' htmlFor="file">Upload Image</label>
                    <label>Upload Image Link:
                        <input type="text" value={imgLink} onChange={handleImgLink} />
                    </label>
                    <label>Date:
                        <input type="date" value={date} onChange={handleDateChange} />
                    </label>
                    <h1>Publish</h1>
                    <div className="buttons">
                        {/* <button>Save as draft</button> */}
                        <button onClick={handleCreatePost}>Publish</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <input type="radio" name="cat" value="prodcut" id="product" onChange={handleCatChange} />
                    <label htmlFor="product">Product</label>
                    <input type="radio" name="cat" value="cinematic" id="cinematic" onChange={handleCatChange} />
                    <label htmlFor="cinematic">Cinematic</label>
                    <input type="radio" name="cat" value="vintage" id="vintage" onChange={handleCatChange} />
                    <label htmlFor="vintage">Vintage</label>
                    <input type="radio" name="cat" value="abstract" id="abstract" onChange={handleCatChange} />
                    <label htmlFor="abstract">Abstract</label>
                    <input type="radio" name="cat" value="design" id="design" onChange={handleCatChange} />
                    <label htmlFor="design">Design</label>
                    <input type="radio" name="cat" value="travel" id="travel" onChange={handleCatChange} />
                    <label htmlFor="travel">Travel</label>
                    <input type="radio" name="cat" value="potrait" id="potrait" onChange={handleCatChange} />
                    <label htmlFor="potrait">Potrait</label>
                    <input type="radio" name="cat" value="nature" id="nature" onChange={handleCatChange} />
                    <label htmlFor="nature">Nature</label>
                </div>

            </div>
        </div>
    )
}

export default Article
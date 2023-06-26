import React, { useState } from 'react'
import ReactQuill, { displayName } from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Article = () => {
    const [value, setValue] =  useState('')
    return (
        <div className='add'>
            <div className="content">
                <input type="text" placeholder='Title' />
                <div className="editorContainer">
                    <ReactQuill className="editor" theme='snow' value={value} onChange={setValue} />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    
                    <input style={{display:"none"}}type="file" id="file" name="" />
                    <label className='file' htmlFor="file">Upload Image</label>
                    <h1>Publish</h1>
                    <div className="buttons">
                        {/* <button>Save as draft</button> */}
                        <button>Update</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <input type="radio" name="new" value="prodcut" id="product" />
                    <label htmlFor="product">Product</label>
                    <input type="radio" name="new" value="cinematic" id="cinematic" />
                    <label htmlFor="cinematic">Cinematic</label>
                    <input type="radio" name="new" value="vintage" id="vintage" />
                    <label htmlFor="vintage">Vintage</label>
                    <input type="radio" name="new" value="abstract" id="abstract" />
                    <label htmlFor="abstract">Abstract</label>
                    <input type="radio" name="new" value="design" id="design" />
                    <label htmlFor="design">Design</label>
                    <input type="radio" name="new" value="travel" id="travel" />
                    <label htmlFor="travel">Travel</label>
                    <input type="radio" name="new" value="potrait" id="potrait" />
                    <label htmlFor="potrait">Potrait</label>
                    <input type="radio" name="new" value="nature" id="nature" />
                    <label htmlFor="nature">Nature</label>
                </div>

            </div>
        </div>
    )
}

export default Article
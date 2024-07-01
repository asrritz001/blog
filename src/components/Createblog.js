import React, { useState } from "react"; 
import { Navigate, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreateBlog =() =>{
    const[title, setTitle] =useState("");
    const[content, setContent] =useState("");
    const navigate =useNavigate();

    const handleSubmit =  async (e) => {
        e.preventDefault();
        try{
            await addBlog (Collection(db,"posts"),{
                title,
                content,
                createAt:new Date(),
            });
            Navigate("/");
        }catch(error ){
            console.log("Error adding document",error);
        }

    };
    return(
        <div className="container">
            <h1>Craete a new blog </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required />

                    <textarea 
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.taget.value)}
                    required />
                    <button type="submit">Submit</button>
                        </form>
        </div>
    );

};
export default CreateBlog;
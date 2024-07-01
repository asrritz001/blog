import React,{useEffect,useState} from "react";
import { collection ,doc,getDocs } from "firebase/firestore";
import {db} from "../firebase";

const Post =() =>{
    const[post, setPost] =useState("");
    
    useEffect(() =>{
        const fetchpost =async () =>{
            const querySnapshot = await getDocs(collection(db, "posts"));
            setPost(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        fetchpost();
    }, []);

   
    return(
        <div className="container">
            <h1>blog posts </h1>
            {postMessage.map((post)=>(
                <div key={post.id}>
                    <h2>{post.title} </h2>
                    <p> {post.content}</p>
                </div>

            ))
            }
        </div>
    );

};
export default Post;
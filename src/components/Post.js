import React,{useEffect,useState} from "react";
import { collection ,getDocs } from "firebase/firestore";
import {db} from "../firebase";
import './Post.css'; 

const Post =() =>{
    const[postMessage, setPostMessage] =useState([]);
    
    useEffect(() =>{
        const fetchPosts =async () =>{
            try{
            const querySnapshot = await getDocs(collection(db, "posts"));
            const posts = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPostMessage(posts);
        }catch (error) {
            console.error("Error fetching documents: ", error);
        }
    };

    fetchPosts();
},[]);
   
    return(
        <div className=" posts-container">
             {Array.isArray(postMessage) ? (
                postMessage.map((post) => (
                    <div key={post.id} className="post-box">
                        <h2>{post.title}</h2>
                        <p>{post.postcontent}</p>
                    </div>
                ))
            ) : (
                <p>No posts available</p>
            )}
        </div>
    );

};
export default Post;
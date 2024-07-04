import React,{useEffect,useState} from "react";
import { collection ,getDocs,deleteDoc,updateDoc,doc } from "firebase/firestore";
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
const handleEdit=(Post) =>{
   
    setImmediate({ id: Post.id ,title: Post.title,postcontent: Post.postcontent});
    setEditMode(true);
};
const handleEditsubmit= async() =>{
  try{
    const postDocRef=doc(db,"posts",editedpost.id);
    await updateDoc(postDocRef,{
        title:editedpost.title,
        postcontent:editedpost.postcontent,
    });
    setEditMode(false);
    console.log("updated");
  }catch(error){
    console.error("Error updating documents",error);
  }
};




const handleDelete =async(postId) =>{ 
     try{
        await deleteDoc(doc(db,posts,postId));
        setPostMessage(postMessage.filter(post =>Post.id !==postId
        ));
        console.log("deleted");

    }catch{
        console.log("error while deleteing ",error);
    }
};
   
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
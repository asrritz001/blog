import React,{useEffect,useState} from "react";
import { collection ,getDocs,deleteDoc,updateDoc,doc } from "firebase/firestore";
import {db} from "../firebase";
import './Post.css'; 

const Post =() =>{
    const[postMessage, setPostMessage] =useState([]);

    const[editedPost, setEditedPost] =({id:'',title:'',postcontent:''});

    const [editMode,setEditMode] =useState(false);
    
    useEffect(() =>{
        const fetchPosts =async () =>{
            try{
            const querySnapshot = await getDocs(collection(db, "posts"));
            const posts = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            console.log("fetched posts ", posts);
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
const handleEditSubmit= async() =>{
  try{
    const postDocRef=doc(db,"posts",editedPost.id);
    await updateDoc(postDocRef,{
        title:editedPost.title,
        postcontent:editedPost.postcontent,
    });
    setEditMode(false);
    console.log("updated");
    const querySnapshot =await getDocs(collection(db ,"posts"));
    const posts =querySnapshot.docs.map((doc) =>
    ({
        id:doc.id,
        ...doc.data(),
    }));
  
    setPostMessage(posts);
  }catch(error){
    console.error("Error updating documents",error);
  }
};




const handleDelete =async(postId) =>{ 
     try{
        await deleteDoc(doc(db,"posts",postId));
        setPostMessage(postMessage.filter(post =>Post.id !==postId
        ));
        console.log("deleted");

    }catch(error){
        console.log("error while deleteing ",error);
    }
};



 console.log("PostMessage:",postMessage);

 if(!Array.isArray(postMessage));{
 console.error('PostMessage is not an array',postMessage);
       return null;
 } 


return(
        <div className=" posts-container">
             {Array.isArray(postMessage) ? (
                postMessage.map((post) => (
                    <div key={post.id} className="post-box">
                        <h2>{post.title}</h2>
                        <p>{post.postcontent}</p>
                        <button onClick={()=>handleEdit(post)}>Edit</button>
                        <button onClick={()=>handleDelete(post.id)}>Delete</button>
                    </div>
                ))
            ) : (
                <p>No posts available</p>
            )}

           
                {editMode && (
                <div>
                    <input
                        type="text"
                        value={editedPost.title}
                        onChange={(e) => setEditedPost({ ...editedPost, title: e.target.value })}
                    />
                    <textarea
                        value={editedPost.postcontent}
                        onChange={(e) => setEditedPost({ ...editedPost, postcontent: e.target.value })}
                    />
                    <button onClick={handleEditSubmit}>Submit</button>
                    <button onClick={() => setEditMode(false)}>Cancel</button>
                    </div>
                    )}
        </div>
    );

};
export default Post;
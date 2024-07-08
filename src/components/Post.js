import React,{useEffect,useState} from "react";
import { collection ,getDocs,deleteDoc,updateDoc,doc } from "firebase/firestore";
import {db} from "../firebase";
import './Post.css'; 

const Post =() =>{
    const[postMessage, setPostMessage] =useState([]);
    const[editedPost, setEditedPost] =useState({
        id :'', title :'',postcontent:''
    });
    const[editMode ,setEditMode]=useState(false);
    useEffect(() =>{
        const fetchPosts =async () =>{
            try{
            const querySnapshot = await getDocs(collection(db, "posts"));
            const posts = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            console.log("fetched",posts);
            setPostMessage(posts);
            }catch (error) {
               console.error("Error fetching documents: ", error);
        }
    };

    fetchPosts();
},[]);
const handleEdit= (post) =>{
 
    setEditedPost({ id: post.id ,title: post.title,postcontent: post.postcontent});
    setEditMode(true);

};
const handleEditsubmit= async() =>{
  try{
    const postDocRef=doc(db,"posts",editedPost.id);
    await updateDoc(postDocRef,{
        title:editedPost.title,
        postcontent:editedPost.postcontent,
    });
   
    console.log("updated");

    const querySnapshot = await getDocs(collection(db, "posts"));
    const updatedposts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    setPostMessage(updatedposts);
    setEditMode(false);
  }catch(error){
    console.error("Error updating documents",error);
  }
};




const handleDelete =async(postId) =>{ 
     try{
        await deleteDoc(doc(db,"posts",postId));
        setPostMessage(postMessage.filter(post =>post.id !==postId
        ));
        console.log("deleted");

        }catch (error) {
        console.log("error while deleteing ",error);
    }
};
   
    return(
        <div className=" posts-container">
             {Array.isArray(postMessage) ? (
                postMessage.length> 0 ?(
                postMessage.map((post) => (
                    <div key={post.id} className="post-box">
                        <h2>{post.title}</h2>
                        <p>{post.postcontent}</p>
                        <button onClick={ () =>handleEdit(post)}> edit</button>
                        <button onClick={() =>handleDelete(post.id)}>delete</button>
                    </div>
                ))
            ) : (
                <p>No posts available</p>
            )
        ):(
            <p>error</p>
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
                    <button onClick={ handleEditsubmit}>Submit</button>
                    <button onClick={() => setEditMode(false)}>Cancel</button>
                </div>
            )}
        
        </div>
    );

};
export default Post; 
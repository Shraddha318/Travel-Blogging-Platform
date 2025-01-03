import React from 'react';
import ReadComp from '../Components/ReadComp';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
function ReadBlog(props) {
    let {id} = useParams();
    let [Blog,SetBlog] = useState({});
    useEffect(()=>{
        let token = localStorage.getItem("token");
        fetch(`https://tame-gold-cormorant-robe.cyclic.app/blogs/${id}`,{
            headers:{
                "Content-Type":"application/json",
                "authorization":`Bearer ${token}`
            }
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            SetBlog(response.blog);
        }).catch((error)=>{
            console.log(error);
        })
    },[])
    return (
        <div>
            <ReadComp Title={Blog.Title} Subtitle={Blog.Subtitle} Content={Blog.Content} Image={Blog.Image}/>
        </div>
    );
}

export default ReadBlog;
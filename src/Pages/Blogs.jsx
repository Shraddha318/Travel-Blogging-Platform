import { useEffect,useState } from 'react';
import React from 'react';
import BlogsCard from '../Components/BlogsCard';
function Blogs(props) {
    let [Blogs,SetBlogs] = useState([]);
    
    useEffect(()=>{
        let token = localStorage.getItem("token");
        fetch("https://tame-gold-cormorant-robe.cyclic.app/blogs",{
            headers:{
                "Content-Type":"application/json",
                "authorization":`Bearer ${token}`
            }
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            if(response.Message === "Please Login !"){
                alert(response.Message);
            }
            else{
                console.log(response);
                SetBlogs(response.blogs);
            }
        }).catch((error)=>{
            console.log(error);
        })
    },[])
    
    return (
        <div>
           {
            Blogs.map((elem,index)=>{
                return <BlogsCard background={elem.Image} Title={elem.Title} Subtitle={elem.Subtitle} id={elem._id} key={elem._id}/>
            })
           }
        </div>
    );
}

export default Blogs;
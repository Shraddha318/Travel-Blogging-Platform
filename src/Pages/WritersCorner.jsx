import React from 'react';
import SmallBlogsCard from '../Components/SmallBlogsCard'
import Style from "./WriterCorner.module.css"
import {Heading,Button} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
function WritersCorner(props) {
    let navigate = useNavigate();
    let [Blogs,SetBlogs] = useState([]);
    useEffect(()=>{
        let token = localStorage.getItem("token");
        fetch("https://tame-gold-cormorant-robe.cyclic.app/blogsowner",{
            headers:{
                "authorization":`Bearer ${token}`
            }
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
          if(response.Message === "Please Login !"){
            alert("Please Login !");
          }
          else{
            SetBlogs(response.blogs)
          }
        }).catch((error)=>{
            console.log(error);
        })
    },[])
    return (
        <div >
            <div className={Style.wallpaperdiv}>
                {/* <img src="https://cdn.pixabay.com/photo/2018/05/13/20/21/lake-3397784_1280.jpg" alt="" /> */}
               <Heading as='h2' color='#62674aff' size='lg' fontStyle='italic'>Take only memories, leave only footprints...</Heading>
            </div>
            <Heading as='h2' color='black' size='lg'  margin='30px'>Your Blogs</Heading>
            <Button variant='outline' colorScheme='green' onClick={()=>{navigate("/createblog")}}>Create Blog</Button>
            <div className={Style.blogs_parent}>
               {
                Blogs.map((elem,index)=>{
                    return <SmallBlogsCard key={elem._id} id={elem._id} image={elem.Image} title={elem.Title}/>
                })
               }
            </div>
        </div>
    );
}

export default WritersCorner;
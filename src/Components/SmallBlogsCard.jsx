import React from 'react';
import {Button,Heading} from "@chakra-ui/react"
import Style from './SmallBlogsCard.module.css'
import {useNavigate} from "react-router-dom"
function SmallBlogsCard(props) {
    let navigate = useNavigate();
    // console.log(props.Image)
    let DeleteBlog=()=>{
        fetch(`https://tame-gold-cormorant-robe.cyclic.app/blogs/${props.id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                
            }
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            alert(response.Message);
            navigate("/corner");
        }).catch((error)=>{
            alert("Failed to Delete")
        })
    }
    return (
        <div className={Style.sblogscard} style={{backgroundImage:`url(${props.image})`}}>
            
           <Heading as='h4' size='sm' style={{color:"white"}}>{props.title}</Heading>
            <div>
            <Button colorScheme='teal'margin='10px' onClick={()=>{navigate(`/editblogs/${props.id}`)}}>Edit Blog</Button>
            <Button colorScheme='red'margin='10px'onClick={
                DeleteBlog
            }>Delete Blog</Button>
            </div>
        </div>
    );
}
export default SmallBlogsCard;
import React from 'react';
import {Button,Heading} from "@chakra-ui/react"
import Style from './BlogsCard.module.css'
import { useNavigate } from 'react-router-dom';
function BlogsCard(props) {
    let navigate = useNavigate();
    return (
        <div className={Style.blogscard} style={{backgroundImage:`url(${props.background})`}}>
            <Heading as='h3' size='lg' style={{color:"white"}}>{props.Title}</Heading>
            <Heading as='h4' size='md' style={{color:"white"}}>{props.Subtitle}</Heading>
            <p style={{color:"white",fontStyle:"italic"}}>Blog by: Shubham Raut.</p>
            <Button colorScheme='gray' variant='solid' style={{margin:"30px 2px",width:"150px"}} onClick={()=>{
                navigate(`/blogs/${props.id}`);
            }}>Read Blog</Button>
            
        </div>
    );
}

export default BlogsCard;
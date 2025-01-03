import React from 'react';
import Style from './ReadComp.module.css'
import { Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
function ReadComp(props) {
    return (
        <div className={Style.readblog_parent} style={{backgroundImage:`url(${props.Image})`}}>
        <div style={{width:"70%",padding:"35px",margin:"auto",backgroundColor:"rgba(0,0,0,0.5)",borderRadius:"8px"}}>
            <p style={{textAlign:"justify",color:'white'}}>{props.Content}</p>
        </div>
        <div className={Style.animages}>
        <Heading as='h2' size='2xl' color={'white'} className={Style.login_quote}>{props.Title}</Heading>
        <Heading as='h3' size='md' color={'white'} className={Style.login_quote}>{props.Subtitle}</Heading>
        <Link to="/blogs" style={{color:"white"}}>Go Back</Link>
        </div>
    </div>
    );
}

export default ReadComp;
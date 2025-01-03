import React from 'react';
import {Input,Button,Heading} from "@chakra-ui/react"
import Style from './LoginForm.module.css'
import {Link,useNavigate} from "react-router-dom"
import { useState } from 'react'
function LoginForm(props) {
    let [Email,SetEmail] = useState("");
    let [Password,SetPassword] = useState("");
    let navigate = useNavigate();
    let ValidateUser=(event)=>{
        event.preventDefault();
        let user = {
            Email,
            Password
        }
        fetch("https://tame-gold-cormorant-robe.cyclic.app/login",{
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                
                "Content-Type":"application/json",
            }
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            if(response.Message === "Login Successful !"){
                localStorage.setItem("Current_User",JSON.stringify(response.user));
                localStorage.setItem("User_role",response.user.Role);
                localStorage.setItem("token",response.token);
                localStorage.setItem("islogged",true)
                alert(response.Message);
                navigate("/blogs");
            }
            else{
                alert("Invalid Credentials");
            }
        }).catch((error)=>{
            alert("Failed to login !");
            console.log(error);
        })
    }
    return (
        <div className={Style.loginformparent}>
           <form style={{width:"70%",padding:"35px",margin:"auto",backgroundColor:"rgba(0,0,0,0.5)",borderRadius:"8px"}} onSubmit={ValidateUser}>
            <h1 style={{fontSize:"30px",fontWeight:"600",color:"white"}}>Login</h1>
            {/* <label>Name</label> */}
            <Input variant='flushed' placeholder='Enter Your Email' size="md" type='email'style={{color:"white"}} onChange={(event)=>{
                SetEmail(event.target.value)
            }}/><br/><br/>
            {/* <label>Email</label> */}
            <Input variant='flushed' placeholder='Enter your Password' size="md" type='password' color="white" style={{color:"white"}} onChange={(event)=>{
                SetPassword(event.target.value)
            }}/><br/><br/>
            <Button type='submit' colorScheme='teal' variant='solid'style={{margin:"20px auto"}}>Login</Button>
            </form>
            <div className={Style.animage}>
            <Heading as='h2' size='2xl' color={'white'} className={Style.login_quote}>Adventure is out there</Heading>
            <Link to='/signup'style={{color:"white",fontWeight:"600"}}>Click to signup!</Link>
            </div>
        </div>
    );
}

export default LoginForm;
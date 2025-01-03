import React from 'react';
import {Input,Button, Select,Heading} from "@chakra-ui/react"
import Style from './Signupform.module.css'
import {Link,useNavigate} from "react-router-dom"
import { useState } from 'react';
function Signupform(props) {
   let [Name,SetName] = useState("");
   let [Email,SetEmail] = useState("");
   let [Role,SetRole] = useState("");
   let [Password,SetPassword] = useState("");
    let navigate = useNavigate();

   let AddUser = (event)=>{
    event.preventDefault();
    let new_user = {
        Name,
        Email,
        Password,
        Role
    }
    fetch("https://tame-gold-cormorant-robe.cyclic.app/signup",{
        method:"POST",
        body:JSON.stringify(new_user),
        headers:{
            "Content-Type":"application/json",
        }
    }).then((response)=>{
        alert("Signup Successful !")
        navigate("/login")
    }).catch((error)=>{
        alert("Failed to Signu");
        console.log(error);
    })


   }
    
    return (
        <div className={Style.signupformparent}>
            <form style={{width:"70%",padding:"35px",margin:"auto",backgroundColor:"rgba(0,0,0,0.5)",borderRadius:"8px"}} onSubmit={AddUser}>
            <h1 style={{fontSize:"30px",fontWeight:"600",color:"white"}}>Signup</h1>
            {/* <label>Name</label> */}
            <Input variant='flushed' placeholder='Enter Your Name' size="md" type='text'style={{color:"white"}} onChange={(event)=>{
                SetName(event.target.value)
            }}/><br/><br/>
            {/* <label>Email</label> */}
            <Input variant='flushed' placeholder='Enter your Email' size="md" type='email' color="white" style={{color:"white"}}onChange={(event)=>{
                SetEmail(event.target.value)
            }}/><br/><br/>
            <Input variant='flushed' placeholder='Enter your Password' size="md" type='password' color="white" style={{color:"white"}}onChange={(event)=>{
                SetPassword(event.target.value)
            }}/><br/><br/>
            <Select variant='flushed' placeholder='Select User Type' style={{color:"gray"}} onChange={(event)=>{
                SetRole(event.target.value)
            }}>
                <option value="Blogger">Blogger</option>
                <option value="Reader">Reader</option>
            </Select>
            <Button type='submit' colorScheme='teal' variant='solid'style={{margin:"20px auto"}}>Signup</Button>
            </form>
            <div className={Style.animages}>
            <Heading as='h2' size='2xl' color={'white'} className={Style.login_quote}>Live your life by a compass, not a clock...</Heading>
            <Link to='/login'style={{color:"white",fontWeight:"600"}}>Click to Login!</Link>
            </div>
        </div>
    );
}

export default Signupform;
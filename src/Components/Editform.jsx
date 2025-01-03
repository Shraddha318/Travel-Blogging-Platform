import {useEffect,useState} from 'react';
import Style from "./EditForm.module.css"
// import Style from './CreateBlogForm.module.css'
import {Input,Button,Heading} from "@chakra-ui/react"
import {Link, useParams} from "react-router-dom"
function Editform(props) {
    let [Title,SetTitle] = useState("");
    let [Subtitle,SetSubtitle] = useState("");
    let [Content,SetContent] = useState("");
    let [Image,SetImage] = useState('');
    let [OldBlog,SetOldBlog] = useState({});
    let [Token,SetToken] = useState(localStorage.getItem("token"));
    let {id} = useParams();
    useEffect(()=>{
      fetch(`https://tame-gold-cormorant-robe.cyclic.app/blogs/${id}`,{
        headers:{
            "Content-Type":"application/json",
            "authorization":`Bearer ${Token}`
        }
       }).then((response)=>{return response.json()}).then((response)=>{SetOldBlog(response.blog)}).catch((error)=>{console.log(error)});
    },[]);

    let AddBlog = (event)=>{
        event.preventDefault();
        console.log(Title,Subtitle,Content,Image)
        if(Title === '' ||Subtitle === '' ||Content === '' ||Image === ''){
           alert("Fill All fields");
           return;
        }
        
        let new_blog={
            Title,
            Subtitle,
            Content,
            Image
        }
        fetch(`https://tame-gold-cormorant-robe.cyclic.app/blogs/${id}`,{
            method:"PUT",
            body:JSON.stringify(new_blog),
            headers:{
                "Content-type":"application/json",
                "authorization":`Bearer ${Token}`
            }
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            alert(response.Message);
        }).catch((error)=>{
            console.log(error);
        })
    }
    
    
    return (
        <div className={Style.editblogform}>
            <form style={{width:"70%",padding:"35px",margin:"auto",backgroundColor:"rgba(0,0,0,0.5)",borderRadius:"8px"}} onSubmit={AddBlog}>
            <h1 style={{fontSize:"30px",fontWeight:"600",color:"white"}}>Create a memory</h1>
            <Input variant='flushed' placeholder='Blog Title' size="md" type='text'style={{color:"white"}} onChange={(event)=>{
                SetTitle(event.target.value)
            }} /><br/><br/>
            <Input variant='flushed' placeholder='Blog Subtitle' size="md" type='text' color="white" style={{color:"white"}} onChange={(event)=>{
               SetSubtitle(event.target.value)
            }}/><br/><br/>
            <Input type='text' variant='outline' placeholder='Blog Content Here' height="200px" color="white" onChange={(event)=>{
               SetContent(event.target.value)
            }}/>
            <Input type='text' margin="20px auto" variant="flushed" color="white" onChange={(event)=>{
               SetImage(event.target.value)
            }}/>
            <Button type='submit' colorScheme='teal' variant='solid'style={{margin:"20px auto"}}>Update</Button>
            </form>
            <div className={Style.animages}>
            <Heading as='h2' size='2xl' color={'white'} className={Style.login_quote}>There is a world elsewhere...</Heading>
            <Link to='/corner'style={{color:"white",fontWeight:"600"}}>Go Back</Link>
            </div>
        </div>
    );
}

export default Editform;
import React from 'react';
import {Route,Routes} from "react-router-dom"
import Home from '../Pages/Home';
import Blogs from '../Pages/Blogs'
import WritersCorner from '../Pages/WritersCorner';
import Createblog from '../Pages/Createblog';
import Gallery from '../Pages/Gallery';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import ReadBlog from '../Pages/ReadBlog';
import EditBlog from '../Pages/EditBlog';
function AllRoutes(props) {
    let role = localStorage.getItem("User_role");
    let islogged = localStorage.getItem("islogged");
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/blogs' element={islogged=="true"?<Blogs/>:<Login/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/createblog' element={<Createblog/>}/>
                <Route path='/corner' element={role=="Blogger"?<WritersCorner/>:<Home/>}/>
                <Route path='/blogs/:id' element={<ReadBlog/>}/>
                <Route path='/editblogs/:id' element={<EditBlog/>}/>
            </Routes>
        </div>
    );
}

export default AllRoutes;
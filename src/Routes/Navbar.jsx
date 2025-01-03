import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Navbar.module.css'
function Navbar(props) {
    return (
        <div className={Style.navbar}>
            <Link to='/' className={Style.nav_element}>Home</Link>
            <Link to='/blogs' className={Style.nav_element}>Blogs</Link>
            <Link to='/login' className={Style.nav_element}>Login</Link>
            <Link to='/corner' className={Style.nav_element}>Writers Corner</Link>
        </div>
    );
}

export default Navbar;
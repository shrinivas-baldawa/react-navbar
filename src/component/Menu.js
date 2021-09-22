import React from 'react';
import {Link} from 'react-router-dom';
function Menu(){
    return(
        <>
        <Link to='/'> Home </Link>
        <Link to='/about'> About Us </Link>
        </>
    )
}

export default Menu;
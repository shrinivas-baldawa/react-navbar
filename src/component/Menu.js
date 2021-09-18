import React from 'react';
import {Link} from 'react-router-dom';
function Menu(){
    return(
        <>
        <Link to='/'> Home </Link>
        <br></br>
        <Link to='/about'> About Us </Link>
        </>
    )
}

export default Menu;
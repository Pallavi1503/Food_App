import { useState } from "react";
import { IMG } from "./Header.constants";

const Header=()=>{
    const [login,setLogin]=useState('Login')

    const handleButton=()=>{
        login==='Login'?setLogin('Logout'):setLogin('Login')
    }

    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={IMG}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li><button onClick={handleButton}>{login}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
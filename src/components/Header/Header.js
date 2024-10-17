import React,{ useState,useContext } from "react";
import { IMG } from "./Header.constants";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
    const [login,setLogin]=useState('Login')
    const {loggedInUser}=useContext(UserContext);
    const cartItems=useSelector((store)=>store.cart.items);

    const handleButton=()=>{
        login==='Login'?setLogin('Logout'):setLogin('LoggedIn')
    }

    return(
        <div className='flex justify-between items-center bg-yellow-100 sm:bg-pink-100'>
            <div className='logo-container'>
                <img className='w-24' src={IMG}/>
            </div>
            <div className='nav-items'>
                <ul className="flex p-4 m-4">
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/cart">Cart ({cartItems.length})</Link></li>
                    <li className="px-4"><button onClick={handleButton}>{login}:{loggedInUser}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
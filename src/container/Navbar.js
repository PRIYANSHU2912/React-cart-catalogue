import React from 'react'
import logo from './logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
    let {counter} = useSelector((state)=> state);
    return (
        <nav className='navbar'>
            <div className='imgdiv'>
                <Link to='/'>
                    <img src={logo} />
                </Link>
            </div>

            <div className='navbarsecond'>
                <div>
                    <Link to='/' className='icon'>Home</Link>
                </div>
                <div>
                    <Link className='icon iconimg' to='/cart'> 
                    <FaShoppingCart /></Link>
                    {
                        counter.length>0 &&
                        <span className='spantext'>{counter.length}</span>
                    }
                </div>
            </div>

        </nav>
    )
}

export default Navbar

import React from 'react'
import './Header.css'
import { IoSearch ,  IoPerson } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
const Header = () => {
  return (
    <>
        <header>
            <div className="container">
                <div className="navbar">
                    <div className="nav-logo">
                        <h2>SAMSUNG</h2>
                    </div>
                    <div className="nav-list">
                        <ul>
                            <li><a href="">SHOP</a></li>
                            <li><a href="">AI</a></li>
                            <li><a href="">MOBILE</a></li>
                            <li><a href="">TV & AUDIO</a></li>
                            <li><a href="">APPLIANCES</a></li>
                            <li><a href="">COMPUTING</a></li>
                            <li><a href="">DISPLAY</a></li>
                            <li><a href="">ACCESORIES</a></li>
                            <li><a href="">SMARTTHINGS</a></li>
                        </ul>
                    </div>
                    <div className="nav-icons">
                        <ul>
                            <li><a href="">Explore</a></li>
                            <li><a href="">Support</a></li>
                            <li><a href="">For business</a></li>
                            <IoSearch className='header-icons' />
                            <MdOutlineShoppingCart  className='header-icons' />
                            <IoPerson className='header-icons'  />
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
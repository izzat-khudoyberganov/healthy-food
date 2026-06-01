import React from 'react';
import shopping_cart from '../../assets/shopping-cart.svg'
import like from '../../assets/heart.svg'
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <div className="content">
                <Link to="/" className="logo">Logo</Link>

                <div className="user__actions">
                    <Link to='/cart'>
                        <img src={shopping_cart} width="24" height="24" alt="Cart" />
                    </Link>
                    <Link to='/like'>
                        <img src={like} width="24" height="24" alt="Like" />
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
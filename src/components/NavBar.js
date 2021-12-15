import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const navLinkStyle = {
    backgroundColor: 'black',
    color: 'white',
    textDecoration: 'none',
    fontSize: '2rem',
    fontWeight: '700',
    padding: '2rem 2rem',
    paddingTop: '2.5rem'
}

const NavBar = () => {
    return (
        <div className="main-container">
            <div className="header">
                <h1>Friends Database</h1>
                <nav className="navbar">
                    {/* <a href="#">Login</a>
                    <a href="#">FriendList</a>
                    <a href="#">AddFriend</a>
                    <a href="#">Logout</a> */}
                    <Link to='/login' style={navLinkStyle}>
                        Login
                    </Link>
                    <Link to={null} style={navLinkStyle}>FriendList</Link>
                    <Link to={null} style={navLinkStyle}>AddFriend</Link>
                    <Link to={null} style={navLinkStyle}>Logout</Link>
                </nav>
            </div>
            <hr />
        </div>
    );
}

export default NavBar;
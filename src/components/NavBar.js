import React from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const navLinkStyle = {
    backgroundColor: 'black',
    color: 'white',
    textDecoration: 'none',
    fontSize: '2rem',
    fontWeight: '700',
    padding: '2rem 2rem',
    paddingTop: '2.5rem'
}

const logoutHandler = () => {
    axiosWithAuth().post('http://localhost:9000/api/logout')
        .then(res => {
            localStorage.removeItem('token');
        })
}

const NavBar = () => {
    return (
        <div className="main-container">
            <div className="header">
                <h1>Friends Database</h1>
                <nav className="navbar">
                    <Link to='/login' style={navLinkStyle}>
                        Login
                    </Link>
                    <Link to='/friends' style={navLinkStyle}>
                        FriendList
                    </Link>
                    <Link to='/friends/add' style={navLinkStyle}>
                        AddFriend
                    </Link>
                    <Link to='/logout' style={navLinkStyle} onClick={logoutHandler}>
                        Logout
                    </Link>
                </nav>
            </div>
            <hr />
        </div>
    );
}

export default NavBar;
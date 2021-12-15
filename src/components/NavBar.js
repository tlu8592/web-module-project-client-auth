import React from 'react';

const NavBar = () => {
    return (
        <div className="main-container">
            <div className="header">
                <h1>Friends Database</h1>
                <nav className="navbar">
                    <a href="#">Login</a>
                    <a href="#">FriendList</a>
                    <a href="#">AddFriend</a>
                    <a href="#">Logout</a>
                </nav>
            </div>
            <hr />
        </div>
    );
}

export default NavBar;
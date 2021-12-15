import React from 'react'
import { useHistory } from 'react-router-dom';
// import axiosWithAuth from '../utils/axiosWithAuth';

const h4Style = {
    fontSize: "3rem"
};

const buttonStyle = {
    width: '30rem',
    height: '10rem',
    fontSize: '2.5rem',
    fontWeight: '600',
    backgroundColor: 'black',
    color: 'white'
};

const Logout = () => {
    const { push } = useHistory();

    return (
        <div>
            {!localStorage.getItem("token") ? <h4 style={h4Style}>You are not logged in.</h4> : <h4 style={h4Style}>Logged out successfully!</h4>}
            <button style={buttonStyle} onClick={() => push('/')}>Go to Home Page</button>
        </div>
    )
}

export default Logout;
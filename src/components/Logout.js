import React, { useEffect } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = props => {
    const { history } = props;

    // useEffect(() => {
    //     axiosWithAuth.post('http://localhost:9000/api/logout')
    //         .then(res => {
    //             localStorage.removeItem('token');
    //         })
    //         .catch(err => console.log(err));
    // }, []);

    return (
        <div>
            <h4>Logged out successfully!</h4>
            <button onClick={() => history.push('/')}>Go to Home Page</button>
        </div>
    )
}

export default Logout;
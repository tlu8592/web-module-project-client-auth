import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('http://localhost:9000/api/login', this.state.credentials)
            .then(res => {
                const { token } = res.data;
                localStorage.setItem("token", token);
                this.props.history.push('/friends');
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className='login-form'>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username
                        <input
                            id='username'
                            type='text'
                            name='username'
                            value={this.state.credentials.username}
                            onChange={this.handleChanges}
                        />
                    </label>
                    <label>
                        Password
                        <input 
                            id='password'
                            type='password'
                            name='password'
                            value={this.state.credentials.password}
                            onChange={this.handleChanges}
                        />
                    </label>
                    <div className='submit-btn'>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
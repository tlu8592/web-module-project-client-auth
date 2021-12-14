import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div className='login-form'>
                <h1>Login</h1>
                <form onSubmit={null}>
                    <label>
                        Username
                        <input
                            id='username'
                            type='text'
                            onChange={null}
                            value={null}
                        />
                    </label>
                    <label>
                        Password
                        <input 
                            id='password'
                            type='password'
                            onChange={null}
                            value={null}
                        />
                    </label>
                </form>
                <div className='submit-btn'>
                    <button>Submit</button>
                </div>
            </div>
        )
    }
}

export default Login;
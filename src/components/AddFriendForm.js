import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import axiosWithAuth from '../utils/axiosWithAuth';

class AddFriendForm extends React.Component {
    constructor() {
        super();
        this.state = {
            formValues: {
                id: uuidv4(),
                friendName: "",
                friendEmail: ""
            }
        }
    }

    handleChanges = e => {
        this.setState({
            formValues: {
                ...this.state.formValues,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const newFriend = {
            ...this.state.formValues,
            name: this.state.formValues.friendName,
            email: this.state.formValues.friendEmail 
        }
        axiosWithAuth().post('http://localhost:9000/api/friends', newFriend)
            .then(res => {
                // console.log(res);
                this.props.history.push('/friends');
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className='friend-form'>
                <h1>Add Friend</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Friend Name
                        <input
                            id='friendName'
                            type='text'
                            name='friendName'
                            value={this.state.formValues.friendName}
                            onChange={this.handleChanges}
                        />
                    </label>
                    <label>
                        Friend Email
                        <input
                            id='friendEmail'
                            type='email'
                            name='friendEmail'
                            value={this.state.formValues.friendEmail}
                            onChange={this.handleChanges}
                        />
                    </label>
                    <div className="submit-btn">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddFriendForm;
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axiosWithAuth from '../utils/axiosWithAuth';

const AddFriendForm = () => {
    // constructor() {
    //     super();
    //     this.state = {
    //         formValues: {
    //             id: uuidv4(),
    //             friendName: "",
    //             friendEmail: ""
    //         }
    //     }
    // }
    const [formValues, setFormValues] = useState({
        id: uuidv4(),
        friendName: "",
        friendEmail: ""
    })

    const { push } = useHistory

    const handleChanges = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newFriend = {
            ...formValues,
            name: formValues.friendName,
            email: formValues.friendEmail 
        }
        axiosWithAuth().post('http://localhost:9000/api/friends', newFriend)
            .then(res => {
                // console.log(res);
                push('/friends');
            })
            .catch(err => console.log(err));
    }

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

export default AddFriendForm;
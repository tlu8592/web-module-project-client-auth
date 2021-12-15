import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        axiosWithAuth().get('http://localhost:9000/api/friends')
            .then(res => {
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return(
            <div className="friends-list">
                <h1>Friends List</h1>
                <ul>
                    {
                        this.state.friends.map(friend => {
                            return <li key={friend.id}>{friend.name} - {friend.email}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default FriendsList;
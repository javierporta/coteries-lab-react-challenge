import React from 'react';
import axios from 'axios';

export default class UsersList extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
    }

    render() {
        return (
            <div>
                <h2>Users List</h2>
                <ul>
                    {this.state.users.map(user =>
                        <li key={user.id}>
                            {user.name}
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}
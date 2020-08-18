import React from 'react';

import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { API_POSTS_URL } from './PostAPI';

const PAGE_LIMIT = 25;

export default class PostsList extends React.Component {
    state = {
        posts: [],
        currentPage: 1 //ToDo: Implement using slice(), and this component https://react-bootstrap.github.io/components/pagination/
    }
    postsAllData = []

    componentDidMount() {
        axios.get(`${API_POSTS_URL}`)
            .then(res => {
                const posts = res.data;
                this.postsAllData = res.data;
                this.setState({ posts: this.applyPageLimit(posts) });
            })
    }

    handleClickDelete(event, post) {
        this.deletePost(post);
    }

    deletePost(postToDelete) {
        //call api
        axios.delete(`${API_POSTS_URL}/${postToDelete.id}`)
            .then(function (response) {
                console.log('Deleted from server');
            })
            .catch(function (error) {
                console.log('Error deleting');
            });

        //remove from list and set new state without calling api
        let updatedListOfPosts = this.state.posts.filter(x => x.id !== postToDelete.id)
        this.setState({ posts: updatedListOfPosts })
    }

    handleChangeSearch = (event) => {
        //Note: in real time scenarios a bounce time should be implemented to decrease amount of hits
        const searchText = event.target.value.toLowerCase();
        let filteredPosts = this.postsAllData.filter(x => x.body.toLowerCase().includes(searchText));

        if (!searchText || searchText === '') {
            this.setState({ posts: this.applyPageLimit(this.postsAllData) })
        } else {
            this.setState({ posts: this.applyPageLimit(filteredPosts) })
        }

    }

    applyPageLimit(post) {
        return post.slice(0, PAGE_LIMIT);
    }

    render() {
        return (
            <div>
                <h2>Posts List</h2>
                <div>
                    <div className="row mt-2 mb-2 justify-content-center">
                        <input className="form-control col-4 align-self-center" type="text"
                            placeholder="Search by post content" aria-label="Search" onChange={this.handleChangeSearch} />
                    </div>
                </div>
                {this.state.posts && this.state.posts.length > 0 &&
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <Table striped bordered hover variant="dark" className="table table-responsive">
                                <thead>
                                    <tr>
                                        <th>Post Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.posts.map(post => (
                                        <tr key={post.id}>
                                            <td>{post.title}</td>
                                            <td>
                                                <Link to={`/posts/${post.id}`}>
                                                    <Button className="mr-2">Edit</Button>
                                                </Link>
                                            </td>
                                            <td>
                                                <Button onClick={event => this.handleClickDelete(event, post)}>Delete</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
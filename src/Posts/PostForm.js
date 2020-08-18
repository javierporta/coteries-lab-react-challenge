import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { API_POSTS_URL } from './PostAPI';

export default class PostForm extends React.Component {
    state = {
        post: {
            title: '',
            body: '',
            id: 0
        }
    }

    componentDidMount() {
        const postId = this.props.match.params.id;
        axios.get(`${API_POSTS_URL}/${postId}`)
            .then(res => {
                const post = res.data;
                this.setState({ post });
            })
    }

    handleClickUpdate = (event) => {
        this.updatePost();
    };

    updatePost() {
        const postToUpdate = this.state.post;
        axios.put(`${API_POSTS_URL}/${postToUpdate.id}`, postToUpdate)
            .then(function (response) {
                console.log('Updated');
            })
            .catch(function (error) {
                console.log('Error updating');
            });
    }

    handleFormChange = (event, prop) => {
        const updatedPost = { ...this.state.post, [prop]: event.target.value }
        this.setState({ post: updatedPost })
    }

    render() {
        return (
            <div>
                <h2>Post {this.state.post.id}</h2>
                <Card bg={"dark"} style={{ width: '40rem' }} className="mx-auto p-4">
                    <form >
                        <div>
                            <div className="form-group">
                                <label htmlFor={"postTitleId"} className="text-white">Title</label>
                                <input type="text" className="form-control" id="postTitleId" placeholder="Title" value={this.state.post.title} onChange={(e) => this.handleFormChange(e, 'title')} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="postBodyId" className="text-white">Body</label>
                                <textarea rows="8" type="text" className="form-control" id="postBodyId" placeholder="Body" value={this.state.post.body} onChange={(e) => this.handleFormChange(e, 'body')} />
                            </div>
                        </div>
                        <Button onClick={event => this.handleClickUpdate(event)}>Update</Button>
                    </form>
                </Card>
            </div >
        )
    }
}

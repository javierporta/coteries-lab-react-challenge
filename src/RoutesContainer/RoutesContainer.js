import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import PostsList from '../Posts/PostsList';
import UsersList from '../Users/UsersList';
import Home from '../Home/Home';
import PostForm from '../Posts/PostForm';

const RoutesContainer = () => {
    return <Switch>
        <Route exact path="/posts" component={PostsList} />
        <Route exact path="/posts/:id" component={PostForm} />

        <Route exact path="/users" component={UsersList} />
        <Route exact path='/' component={Home} />
        <Route render={function () {
            return <p>Not found</p>
        }} />
    </Switch>;
};


export default RoutesContainer;

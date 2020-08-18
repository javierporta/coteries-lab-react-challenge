import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import UsersList from './Users/UsersList';
import PostsList from './Posts/PostsList';
import Home from './Home/Home';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/posts">
                    <PostsList />
                </Route>
                <Route path="/users">
                    <UsersList />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
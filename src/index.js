import React from 'react';
import { render } from 'react-dom';
import PostsProvider from './providers/PostProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';

import Application from './components/Application';
import UserProvider from "./providers/UserProvider";

render(
    <Router>
        <UserProvider>
            <PostsProvider>
                <Application />
            </PostsProvider>
        </UserProvider>
    </Router>,
    document.getElementById('root')
);

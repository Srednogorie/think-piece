import React from 'react';
import { render } from 'react-dom';
import PostsProvider from './providers/PostProvider';

import './index.scss';

import Application from './components/Application';
import UserProvider from "./providers/UserProvider";

render(
    <UserProvider>
        <PostsProvider>
            <Application />
        </PostsProvider>
    </UserProvider>,
    document.getElementById('root')
);

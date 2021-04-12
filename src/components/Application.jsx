import React, { Component } from 'react';
import {auth, createUserDocument, firestore} from '../firebase';

import Posts from './Posts';
import {collectIdsAndData} from "../utilities";
import CurrentUser from "./CurrentUser";
import SignIn from "./SignIn";
import SignInAndSignUp from "./SignInAndSignUp";
import Authentication from "./Authentication";

class Application extends Component {
  state = {
    posts: [],
    user: null
  };

  unsubscribeFromFirestore = null;
  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromFirestore = firestore.collection('posts').orderBy('createdAt', 'desc').onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectIdsAndData);
      this.setState({ posts });
    });
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const user = await createUserDocument(userAuth);
      console.log(user);
      this.setState({ user });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
    this.unsubscribeFromAuth();
  }

  render() {
    const { posts, user } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authentication user={user}/>
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;

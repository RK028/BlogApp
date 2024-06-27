// src/App.js
import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const clearUserSelection = () => setSelectedUser(null);
  const clearPostSelection = () => setSelectedPost(null);

  return (
    <div>
      <h1>Blog Application</h1>
      <UserForm selectedUser={selectedUser} clearSelection={clearUserSelection} />
      <UserList selectUser={setSelectedUser} />
      <PostForm selectedPost={selectedPost} clearSelection={clearPostSelection} />
      <PostList selectPost={setSelectedPost} />
    </div>
  );
};

export default App;

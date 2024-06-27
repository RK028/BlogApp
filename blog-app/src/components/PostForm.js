// src/components/PostForm.js
import React, { useState, useEffect } from 'react';
import { createPost, updatePost } from '../api';

const PostForm = ({ selectedPost, clearSelection }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (selectedPost) {
      setTitle(selectedPost.title);
      setBody(selectedPost.body);
      setUserId(selectedPost.user);
    }
  }, [selectedPost]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = { title, body, user: userId };
    if (selectedPost) {
      await updatePost(selectedPost._id, post);
    } else {
      await createPost(post);
    }
    clearSelection();
    setTitle('');
    setBody('');
    setUserId('');
  };

  return (
    <div>
      <h2>{selectedPost ? 'Edit Post' : 'Add Post'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <button type="submit">{selectedPost ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default PostForm;

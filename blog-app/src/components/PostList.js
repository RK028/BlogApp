// src/components/PostList.js
import React, { useEffect, useState } from 'react';
import { getPosts, deletePost } from '../api';

const PostList = ({ selectPost }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await getPosts();
    setPosts(response.data);
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    fetchPosts();
  };

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            {post.title}
            <button onClick={() => selectPost(post)}>Edit</button>
            <button onClick={() => handleDelete(post._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;

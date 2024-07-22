// src/components/Post.js
import React from 'react';
import './Post.css';

const Post = ({ post }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {/* Add additional elements as needed */}
    </div>
  );
};

export default Post;

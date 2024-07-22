import React from 'react';
import { useBlog } from '../context/BlogContext';

const Home = () => {
  const { posts, deletePost } = useBlog();

  return (
    <div className="home-container">
      <h1>Home Page</h1>
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {post.media && (post.media.type.startsWith('image/') ? (
            <img src={URL.createObjectURL(post.media)} alt="post media" />
          ) : (
            <video src={URL.createObjectURL(post.media)} controls />
          ))}
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;

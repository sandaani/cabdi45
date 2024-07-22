// src/pages/SomePage.js
import React from 'react';
import Post from '../components/Post';

const SomePage = () => {
  const post = {
    title: 'Dynamic Post Title',
    body: 'This is the body of the dynamic post.',
  };

  return (
    <div>
      <h1>Some Page</h1>
      <Post post={post} />
    </div>
  );
};

export default SomePage;

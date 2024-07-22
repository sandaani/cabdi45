import React, { useState } from 'react';
import { useBlog } from '../context/BlogContext';

const CreatePost = () => {
  const { addPost } = useBlog();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [media, setMedia] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, media };
    addPost(newPost);
    setTitle('');
    setContent('');
    setMedia(null);
  };

  const handleFileChange = (e) => {
    setMedia(e.target.files[0]);
  };

  return (
    <div className="create-post-container">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        <label>Media (Image/Video):</label>
        <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;

import React, { useState, useEffect } from 'react';
import { useBlog } from '../context/BlogContext';
import { useParams, useNavigate } from 'react-router-dom';

const UpdatePost = () => {
  const { id } = useParams();
  const { posts, updatePost } = useBlog();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const currentPost = posts.find((p) => p.id === id);
    if (currentPost) {
      setPost(currentPost);
      setTitle(currentPost.title);
      setContent(currentPost.content);
    }
  }, [id, posts]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePost(id, { title, content });
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2>Update Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdatePost;

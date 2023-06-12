import React, { useState } from 'react';

const UpdatePostForm = ({ postId, onUpdate }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleUpdate = () => {
    onUpdate(postId, { title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Update Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleUpdate}>OK</button>
    </div>
  );
};

export default UpdatePostForm;

import React from 'react';

const PostsPage = ({ posts, onDelete, onUpdate }) => {
  return (
    <div>
      <h1>Posts Page</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => onDelete(post.id)}>Delete</button>
          <button onClick={() => onUpdate(post.id)}>Update</button>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;

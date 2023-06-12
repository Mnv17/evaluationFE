import React, { useState } from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import PostsPage from './PostsPage';
import UpdatePostForm from './UpdatePostForm';

const App = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [postCount, setPostCount] = useState(0);

  const handleLogin = () => {
    setUser({ id: 1, name: 'John' });
    setPosts([
      { id: 1, title: 'First Post', content: 'Lorem ipsum dolor sit amet' },
      { id: 2, title: 'Second Post', content: 'Consectetur adipiscing elit' },
    ]);
    setPostCount(2);
  };

  const handleLogout = () => {
    setUser(null);
    setPosts([]);
    setPostCount(0);
  };

  const handleDelete = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
    setPostCount((prevCount) => prevCount - 1);
  };

  const handleUpdate = (postId, updatedData) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, ...updatedData };
      }
      return post;
    });
    setPosts(updatedPosts);
    setShowUpdateForm(false);
  };

  const handleUpdateButtonClick = (postId) => {
    setSelectedPostId(postId);
    setShowUpdateForm(true);
  };

  return (
    <div>
      <Navbar postCount={postCount} onLogout={handleLogout} />
      {!user && <HomePage />}
      {!user && <SignupPage />}
      {!user && <LoginPage onLogin={handleLogin} />}
      {user && !showUpdateForm && (
        <PostsPage posts={posts} onDelete={handleDelete} onUpdate={handleUpdateButtonClick} />
      )}
      {showUpdateForm && (
        <UpdatePostForm postId={selectedPostId} onUpdate={handleUpdate} />
      )}
    </div>
  );
};

export default App;

import React from 'react';

const Navbar = ({ postCount, onLogout }) => {
  return (
    <nav>
      <div>Posts Count: {postCount}</div>
      <button onClick={onLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;

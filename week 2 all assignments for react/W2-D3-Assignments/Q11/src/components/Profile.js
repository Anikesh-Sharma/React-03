// src/components/Profile.js
import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const Profile = () => {
  const { user, loginUser, logoutUser } = useContext(UserContext);

  return (
    <div>
      {user.isAuthenticated ? (
        <div>
          <h2>Welcome, {user.name}</h2>
          <p>Email: {user.email}</p>
          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please log in</h2>
          <button onClick={() => loginUser('John Doe', 'john@example.com')}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Profile;

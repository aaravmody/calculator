// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import api from '../api/api'; // Import the axios instance

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get('/api/user');
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}</h1>
          <img src={user.image} alt={user.displayName} />
          {/* Display uploaded files here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;

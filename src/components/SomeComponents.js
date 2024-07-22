import React, { useState, useEffect } from 'react';

const SomeComponents = () => {
 
  // eslint-disable-next-line no-unused-vars
const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    // Simulate fetching user data
    const fetchUser = async () => {
      // Fetch user data logic
      const user = await someUserFetchFunction();
      setCurrentUser(user);
    };

    fetchUser();
  }, []);

  return (
    <div>
      {currentUser ? (
        <p>Welcome, {currentUser.name}!</p>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default SomeComponents;

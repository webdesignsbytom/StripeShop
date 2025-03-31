import React, { createContext, useContext, useEffect, useState } from 'react';
// Api
import client from '../api/client';
// Constants
import {
  GET_LOGGED_IN_USER_API,
  HOME_PAGE_URL,
} from '../utils/Constants';
// Hooks
import useNavigateToPage from '../hooks/useNavigateToPage';
// Utils
import LoggedInUser from '../utils/user/LoggedInUser';

// Create the context
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const navigateToPage = useNavigateToPage();

  const [user, setUser] = useState({
    id: null,
  });

  const [token, setToken] = useState(
    localStorage.getItem(process.env.REACT_APP_USER_TOKEN) || ''
  );

  useEffect(() => {
    const decodedUserData = LoggedInUser();

    if (decodedUserData !== null) {
      const userId = decodedUserData.id;

      client
        .get(`${GET_LOGGED_IN_USER_API}/${userId}`)
        .then((res) => {
          setUser(res.data.data.user); // Set user state based on API response
        })
        .then(() => navigateToPage(HOME_PAGE_URL)) // Navigate to home page
        .catch((err) => {
          console.error('Unable to retrieve user data', err);
        });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default UserProvider;

import {useState, useEffect} from 'react';
import {Auth} from 'aws-amplify';
import {Hub} from '@aws-amplify/core';

/* The function is a react hook that tracks the user's login status and provides a "isLoggedIn" flag that can be checked in code. */
function useUserStatus() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const updateUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
      } catch {
        setUser(null);
      }
    };
    Hub.listen('auth', updateUser); // listen for login/signup events

    // Not using async to wait for updateUser, so there will be a flash of page where the user is assumed not to be logged in. If we use a flag
    updateUser(); // Check manually the first time because we won't get a Hub event
    return () => Hub.remove('auth', updateUser); // Cleanup
  }, []);

  return user;
}

export default useUserStatus;

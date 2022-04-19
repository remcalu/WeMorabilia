import {Auth} from 'aws-amplify';

/* The function attempts to logout, then redirects to the home page once the logout has been completed */
async function signOut() {
  try {
    await Auth.signOut();
    window.location.replace('/');
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

export default signOut;

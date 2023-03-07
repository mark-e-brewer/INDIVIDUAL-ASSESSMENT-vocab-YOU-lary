import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginout/loginButton';
import logoutButton from '../components/loginout/logoutButton';
// import clearDOM from './clearDOM';
import client from './client';
import startApp from './startApp';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      // clearDOM();
      startApp();
      logoutButton(user);
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;

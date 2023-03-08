import { signOut } from '../../utils/auth';

const logoutButton = () => {
  // const domString = '<button id="google-auth" class="logout-btn">Signout</button>';
  // document.querySelector('#logout-nav').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

export default logoutButton;

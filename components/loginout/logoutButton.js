import { signOut } from '../../utils/auth';

const logoutButton = () => {
  const domString = '<button id="google-auth" class="logout-btn">Signout</button>';
  document.querySelector('#logout-button').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

export default logoutButton;

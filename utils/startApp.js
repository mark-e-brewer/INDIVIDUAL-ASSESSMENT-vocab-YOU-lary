import DomBuilder from '../components/shared/DomBuilder';
import navBar from '../components/shared/navBar';
import navigationEvents from '../events/navEvents';
import signinPage from '../pages/signinPage';

const startApp = (user) => {
  DomBuilder();
  navBar();
  navigationEvents(user);
  signinPage();
};

export default startApp;

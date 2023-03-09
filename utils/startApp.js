import DomBuilder from '../components/shared/DomBuilder';
import navBar from '../components/shared/navBar';
import navigationEvents from '../events/navEvents';
import signinPage from '../pages/signinPage';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  DomBuilder();
  navBar();
  navigationEvents(user);
  signinPage();
  domEvents();
  formEvents(user);
};

export default startApp;

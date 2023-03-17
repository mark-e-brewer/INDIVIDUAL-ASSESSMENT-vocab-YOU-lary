import DomBuilder from '../components/shared/DomBuilder';
import navBar from '../components/shared/navBar';
import { navigationEvents, filterEvents, searchEvents } from '../events/navEvents';
import signinPage from '../pages/signinPage';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  DomBuilder();
  navBar();
  navigationEvents(user);
  signinPage();
  domEvents(user);
  formEvents(user);
  filterEvents(user);
  searchEvents(user);
};

export default startApp;

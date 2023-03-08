import DomBuilder from '../components/shared/DomBuilder';
import navBar from '../components/shared/navBar';
import navigationEvents from '../events/navEvents';

const startApp = (user) => {
  DomBuilder();
  navBar();
  navigationEvents(user);
};

export default startApp;

// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';

const init = () => {
  ViewDirectorBasedOnUserAuthStatus();
};

init();
// <h2 id="header">Welcome to Vocab-YOU-lary</h2>

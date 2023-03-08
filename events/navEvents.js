import { showTerms, emptyTerms } from '../pages/terms';
import { showTech, emptyTech } from '../pages/tech';
import { getTerms } from '../api/termData';
import { getTech } from '../api/techData';s
import clearDOM from '../utils/clearDOM';

const navigationEvents = (user) => {
  // LOGOUT BUTTON

  document.querySelector('#nav-terms').addEventListener('click', () => {
    console.warn('button clicked');
    getTerms(user.uid).then((data) => {
      if (data.length === 0) {
        clearDOM();
        emptyTerms();
      } else {
        clearDOM();
        showTerms(data);
      }
    });
  });
  document.querySelector('#nav-tech').addEventListener('click', () => {
    getTech(user.uid).then((data) => {
      if (data.length === 0) {
        emptyTech();
      } else {
        showTech(data);
      }
    });
  });
};

export default navigationEvents;

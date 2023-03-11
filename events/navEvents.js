import { showTerms, emptyTerms } from '../pages/terms';
import { showTech, emptyTech } from '../pages/tech';
import { getTerms } from '../api/termData';
import { getTech } from '../api/techData';
import techFilterBtn from '../components/filters/techFilter';
import termFilterBtn from '../components/filters/termFilter';
import clearFilter from '../utils/clearFilter';

const navigationEvents = (user) => {
  // LOGOUT BUTTON

  document.querySelector('#nav-terms').addEventListener('click', () => {
    getTerms(user.uid).then((data) => {
      if (data.length === 0) {
        termFilterBtn();
        emptyTerms();
        clearFilter();
      } else {
        termFilterBtn();
        showTerms(data);
        clearFilter();
      }
    });
  });
  document.querySelector('#nav-tech').addEventListener('click', () => {
    getTech(user.uid).then((data) => {
      if (data.length === 0) {
        techFilterBtn();
        emptyTech();
        clearFilter();
      } else {
        techFilterBtn();
        showTech(data);
        clearFilter();
      }
    });
  });
};

const filterEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('term-filter')) {
      document.querySelectorAll('#newest-btn').innerHTML = 'Newest';
      document.querySelectorAll('#oldest-btn').innerHTML = 'Oldest';
      document.querySelectorAll('#alpha-btn').innerHTML = 'Alphabetical';
    }
  });
};

export {
  navigationEvents,
  filterEvents,
};

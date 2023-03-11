import { showTerms, emptyTerms } from '../pages/terms';
import { showTech, emptyTech } from '../pages/tech';
import { getTerms } from '../api/termData';
import { getTech } from '../api/techData';
import { techFilterBtn, techFilterOptions } from '../components/filters/techFilter';
import { termFilterBtn, termFilterOptions } from '../components/filters/termFilter';
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

const filterEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('term-filter')) {
      termFilterOptions();
    }

    if (e.target.id.includes('tech-filter')) {
      techFilterOptions();
    }
    if (e.target.id.includes('term-filter-newest')) {
      getTerms(user.uid).then((data) => {
        const newest = data.sort((a, b) => a.time - b.time);
        showTerms(newest);
      });
    }

    if (e.target.id.includes('term-filter-oldest')) {
      getTerms(user.uid).then((data) => {
        const oldest = data.sort((a, b) => b.time - a.time);
        showTerms(oldest);
      });
    }

    if (e.target.id.includes('term-filter-alpha')) {
      getTerms(user.uid).then((data) => {
        const alphabetical = data.sort((a, b) => a.title.localeCompare(b.title));
        showTerms(alphabetical);
      });
    }

    if (e.target.id.includes('tech-filter-newest')) {
      getTech(user.uid).then((data) => {
        const newest = data.sort((a, b) => a.time - b.time);
        showTech(newest);
      });
    }

    if (e.target.id.includes('tech-filter-oldest')) {
      getTech(user.uid).then((data) => {
        const oldest = data.sort((a, b) => b.time - a.time);
        showTech(oldest);
      });
    }

    if (e.target.id.includes('tech-filter-alpha')) {
      getTech(user.uid).then((data) => {
        const alphabetical = data.sort((a, b) => a.title.localeCompare(b.title));
        showTech(alphabetical);
      });
    }
  });
};

export {
  navigationEvents,
  filterEvents,
};

// const timesArr = [];
// getTerms(user.uid).then((data) => {
//   for (let i = 0; i < data.length; i++) {
//     timesArr.push(data[i].time);
//   }
//   console.warn(timesArr.sort((a, b) => b - a));
//   console.warn(data);
//   data.filter((a, b) => a )
// });

// import { createTech } from '../api/techData';
// import { createTerm } from '../api/termData';
// import { showTech } from '../pages/tech';
// import { showTerms } from '../pages/terms';
import { deleteSingleTech, getSingleTech, getTech } from '../api/techData';
import { deleteSingleTerm, getSingleTerm, getTerms } from '../api/termData';
import addTechForm from '../components/forms/addTechForm';
import addTermForm from '../components/forms/addTermForm';
import { showTech } from '../pages/tech';
import { showTerms } from '../pages/terms';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-tech-btn')) {
      addTechForm();
    }

    if (e.target.id.includes('add-term-btn')) {
      addTermForm();
    }

    if (e.target.id.includes('edit-tech-btn')) {
      console.warn(Date.now());
      const [, firebaseKey] = e.target.id.split('--');

      getSingleTech(firebaseKey).then((techObj) => addTechForm(techObj));
    }

    if (e.target.id.includes('edit-term-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleTerm(firebaseKey).then((termObj) => addTermForm(termObj));
    }

    if (e.target.id.includes('delete-tech-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('DELETE TECH');
        const [, firebaseKey] = e.target.id.split('--');
        deleteSingleTech(firebaseKey).then(() => {
          getTech(user.uid).then(showTech);
        });
      }
    }

    if (e.target.id.includes('delete-term-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('DELETE TERM');
        const [, firebaseKey] = e.target.id.split('--');
        deleteSingleTerm(firebaseKey).then(() => {
          getTerms(user.uid).then(showTerms);
        });
      }
    }
  });
};
export default domEvents;

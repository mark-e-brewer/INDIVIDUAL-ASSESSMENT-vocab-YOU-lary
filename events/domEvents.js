// import { createTech } from '../api/techData';
// import { createTerm } from '../api/termData';
// import { showTech } from '../pages/tech';
// import { showTerms } from '../pages/terms';
import { getSingleTech } from '../api/techData';
import { getSingleTerm } from '../api/termData';
import addTechForm from '../components/forms/addTechForm';
import addTermForm from '../components/forms/addTermForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-tech-btn')) {
      addTechForm();
    }

    if (e.target.id.includes('add-term-btn')) {
      addTermForm();
    }

    if (e.target.id.includes('edit-tech-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleTech(firebaseKey).then((techObj) => addTechForm(techObj));
    }

    if (e.target.id.includes('edit-term-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleTerm(firebaseKey).then((termObj) => addTechForm(termObj));
    }
  });
};
export default domEvents;

// import { createTech } from '../api/techData';
// import { createTerm } from '../api/termData';
// import { showTech } from '../pages/tech';
// import { showTerms } from '../pages/terms';
import addTechForm from '../components/forms/addTechForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-tech-btn')) {
      console.warn('add tech button clicked');
      addTechForm();
    }
  });
};

export default domEvents;

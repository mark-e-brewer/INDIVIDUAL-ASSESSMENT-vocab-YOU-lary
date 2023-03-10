import { showTech } from '../pages/tech';
import { showTerms } from '../pages/terms';
import { createTech, updateTech, getTech } from '../api/techData';
import { createTerm, updateTerm, getTerms } from '../api/termData';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-tech')) {
      const payload = {
        title: document.querySelector('#tech-title').value,
        definition: document.querySelector('#tech-form-description').value,
        time: Date.now(),
        uid: user.uid,
      };

      createTech(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateTech(patchPayload).then(() => {
          getTech(user.uid).then(showTech);
        });
      });
    }

    if (e.target.id.includes('update-tech')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#tech-title').value,
        definition: document.querySelector('#tech-form-description').value,
        firebaseKey,
      };
      updateTech(payload).then(() => {
        getTech(user.uid).then(showTech);
      });
    }

    if (e.target.id.includes('submit-term')) {
      const payload = {
        title: document.querySelector('#term-title').value,
        definition: document.querySelector('#term-form-description').value,
        time: Date.now(),
        uid: user.uid,
      };

      createTerm(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateTerm(patchPayload).then(() => {
          getTerms(user.uid).then(showTerms);
        });
      });
    }

    if (e.target.id.includes('update-term')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#term-title').value,
        definition: document.querySelector('#term-form-description').value,
        firebaseKey,
      };
      updateTerm(payload).then(() => {
        getTerms(user.uid).then(showTerms);
      });
    }
  });
};

export default formEvents;

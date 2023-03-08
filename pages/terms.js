import clearDOM from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const emptyTerms = () => {
  const domString = '<h1>Nothing here yet!</h1>';
  renderToDOM('#view', domString);
};

const showTerms = (array) => {
  clearDOM();
  console.warn('show terms working');

  const btnString = '<button class="addTerm" id="add-term">Add a Term</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card" style="width: 19rem;" id="term-card">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Term</h6>
      <p class="card-text">${item.definition}</p>
      <a class="card-link btn" id="edit-term-btn--${item.firebaseKey}">Edit</a>
      <a class="card-link btn" id="delete-term-btn--${item.firebaseKey}">Delete</a>
    </div>
  </div>`;
  });
  renderToDOM('#view', domString);
};

export { showTerms, emptyTerms };

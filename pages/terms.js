import clearDOM from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const showTerms = (array) => {
  clearDOM();

  const btnString = '<button class="addTerm" id="add-term">Add a Term</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card" style="width: 12rem;">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Term</h6>
      <p class="card-text">${item.definition}</p>
      <a class="card-link" id="edit-term-btn--${item.firebaseKey}">Edit</a>
      <a class="card-link" id="delete-term-btn--${item.firebaseKey}">Delete</a>
    </div>
  </div>`;
  });
  renderToDOM('#view', domString);
};

export default showTerms;

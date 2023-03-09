import clearDOM from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const emptyTerms = () => {
  const domString = '<h1>Nothing here yet!</h1>';
  renderToDOM('#view', domString);
};

const showTerms = (array) => {
  clearDOM();

  const btnString = '<button class="formBtn" id="add-term-btn">Add a Term</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card" style="height: 400px;" id="term-card">
    <div class="card-body" style="height: 300px;">
      <h5 class="card-title" id="termTitle">${item.title}</h5>
      <hr>
      <h6 class="card-subtitle mb-2 text-muted">Term</h6>
      <p class="card-text">${item.definition}</p>
      <div id="term-card-btns">
       <a type="button" class="card-link btn termEdit" id="edit-term-btn--${item.firebaseKey}">Edit</a>
       <a type="button" class="card-link btn techDelete" id="delete-term-btn--${item.firebaseKey}">Delete</a>
      </div>
    </div>
  </div>`;
  });
  renderToDOM('#view', domString);
};

export { showTerms, emptyTerms };

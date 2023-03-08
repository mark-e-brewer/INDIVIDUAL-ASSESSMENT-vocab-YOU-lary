import clearDOM from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const emptyTech = () => {
  const domString = '<h1>Nothing here yet!</h1>';
  renderToDOM('#view', domString);
};

const showTech = (array) => {
  clearDOM();

  const btnString = '<button class="formBtn" id="add-tech">Add a Tech</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card" style="width: 19rem;" id="tech-card">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Tech</h6>
      <p class="card-text">${item.definition}</p>
      <a class="card-link btn" id="edit-term-btn--${item.firebaseKey}">Edit</a>
      <a class="card-link btn" id="delete-term-btn--${item.firebaseKey}">Delete</a>
    </div>
  </div>`;
  });
  renderToDOM('#view', domString);
};

export { showTech, emptyTech };

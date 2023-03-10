import clearDOM from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const emptyTech = () => {
  const domString = '<h1>Nothing here yet!</h1>';
  renderToDOM('#view', domString);
};

const showTech = (array) => {
  clearDOM();

  const btnString = '<button class="formBtn" id="add-tech-btn">Add a Tech</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card" style="height: 400px;" id="tech-card">
    <div class="card-body" style="height: 300px;">
      <h5 class="card-title" id="techTitle">${item.title}</h5>
      <hr>
      <h6 class="card-subtitle mb-2 text-muted">Tech</h6>
      <p class="card-text">${item.definition}</p>
      <div id="tech-card-btns">
       <a class="card-link btn techEdit" id="edit-tech-btn--${item.firebaseKey}">Edit</a>
       <a class="card-link btn techDelete" id="delete-tech-btn--${item.firebaseKey}">Delete</a>
      </div>
    </div>
  </div>`;
  });
  renderToDOM('#view', domString);
};

export { showTech, emptyTech };

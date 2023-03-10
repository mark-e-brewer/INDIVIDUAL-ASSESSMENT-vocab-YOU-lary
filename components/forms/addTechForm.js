import clearDOM from '../../utils/clearDOM';
import renderToDOM from '../../utils/renderToDOM';

const addTechForm = (obj = {}) => {
  clearDOM();
  document.querySelector('#add-button').innerHTML = '';
  const domString = `
<form class="addForm techForm" id="${obj.firebaseKey ? `update-tech--${obj.firebaseKey}` : 'submit-tech'}">
  <div class="form-group">
    <input class="formBar titleBar" type="text" id="tech-title" placeholder="Technology" value="${obj.title || ''}"  required>
    <label for="title"></label>
  </div>
  <div class="form-group formDesc">
    <label for="description"></label>
    <textarea class="formBar descBar form-control" type="text" id="tech-form-description" placeholder="Description" style="height: 150px" required>${obj.definition || ''}</textarea>
  </div>
  <button class="formSubmit" type="submit" id="tech-submit-btn">SUBMIT</button>
</form>`;

  renderToDOM('#form-container', domString);
};

export default addTechForm;

import clearDOM from '../../utils/clearDOM';
import renderToDOM from '../../utils/renderToDOM';

const addTermForm = (obj = {}) => {
  clearDOM();
  document.querySelector('#add-button').innerHTML = '';
  const domString = `
<form class="addForm techForm" id="${obj.firebaseKey ? `update-term--${obj.firebaseKey}` : 'submit-term'}">
  <div class="form-group">
    <input class="formBar titleBar" type="text" id="term-title" placeholder="Termonology" value="${obj.title || ''}" required>
    <label for="title"></label>
  </div>
  <div class="form-group formDesc">
    <label for="description"></label>
    <textarea class="formBar descBar form-control" type="text" id="term-form-description" placeholder="Description" style="height: 150px" required>${obj.definition || ''}</textarea>
  </div>
  <button class="formSubmit" type="submit" id="term-submit-btn">SUBMIT</button>
</form>`;

  renderToDOM('#form-container', domString);
};

export default addTermForm;

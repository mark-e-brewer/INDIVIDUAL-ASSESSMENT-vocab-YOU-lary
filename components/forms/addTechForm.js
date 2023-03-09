import clearDOM from '../../utils/clearDOM';
import renderToDOM from '../../utils/renderToDOM';

const addTechForm = () => {
  clearDOM();
  document.querySelector('#add-button').innerHTML = '';
  const domString = `
<form>
  <div class="input-group">
    <input type="text" id="name" required>
    <label for="title">Technology Name</label>
  </div>
  <div class="input-group">
   <input type="text" id="name" required>
   <label for="description">Description</label>
  </div>
  <button type="submit" id="tech-submit-btn">SUBMIT</button>
</form>`;

  renderToDOM('#form-container', domString);
};

export default addTechForm;

import renderToDOM from '../utils/renderToDOM';

const signinPage = () => {
  const domString = '<div id="signin-page"><h3>VocabYOUlary helps you learn about new technologies and programming termonology!</h3><p>Click "Terms or Tech in the navbar to get started leaning.</p></div>';

  renderToDOM('#view', domString);
};

export default signinPage;

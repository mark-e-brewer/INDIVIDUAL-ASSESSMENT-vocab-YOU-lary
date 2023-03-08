import renderToDOM from '../../utils/renderToDOM';

const navBar = () => {
  const domString = `<nav class="navbar fixed-top navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">VocabYOUlary</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Terms</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tech</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#" id="google-auth">Signout</a>
      </li>
      </ul>
      <span class="navbar-text">
            <div id="cart-button"></div>
            <div id="logout-nav"></div>
          </span>
    </div>
  </div>
</nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;

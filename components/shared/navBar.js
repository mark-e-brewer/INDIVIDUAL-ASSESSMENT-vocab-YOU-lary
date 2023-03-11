import renderToDOM from '../../utils/renderToDOM';

const navBar = () => {
  const domString = `<nav class="navbar fixed-top navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">VocabYOUlary</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#" id="nav-terms">Terms</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="nav-tech">Tech</a>
        </li>
        <div id="filter-btn"></div>
        <li class="nav-item">
          <a class="nav-link" id="newest-btn"></a>
        </li>
        <li class="nav-item">
         <a class="nav-link" id="oldest-btn"></a>
        </li>
        <li class="nav-item">
         <a class="nav-link" id="alpha-btn"></a>
        </li>
      </ul>
      <span class="navbar-text" id="logout-span">
            <div id="cart-button"></div>
            <div id="logout-button"></div>
          </span>
    </div>
  </div>
</nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;

import renderToDOM from '../../utils/renderToDOM';

const termFilterBtn = () => {
  const domString = '<li class="nav-item"><a class="nav-link" href="#" id="term-filter">Filter</a></li>';
  renderToDOM('#filter-btn', domString);
};

export default termFilterBtn;

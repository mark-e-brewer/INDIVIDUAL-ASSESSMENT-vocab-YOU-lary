import renderToDOM from '../../utils/renderToDOM';

const techFilterBtn = () => {
  const domString = '<li class="nav-item"><a class="nav-link" href="#" id="tech-filter">Filter</a></li>';
  renderToDOM('#filter-btn', domString);
};

export default techFilterBtn;

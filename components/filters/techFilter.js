import renderToDOM from '../../utils/renderToDOM';

const techFilterBtn = () => {
  const domString = '<li class="nav-item"><a class="nav-link" href="#" id="tech-filter">Filter</a></li>';
  renderToDOM('#filter-btn', domString);
};

const techFilterOptions = () => {
  const domStrNew = '<li class="nav-item"><a class="nav-link nav-techF" href="#" id="tech-filter-newest">Newest</a></li>';
  const domStrOld = '<li class="nav-item"><a class="nav-link nav-techF" href="#" id="tech-filter-oldest">Oldest</a></li>';
  const domStrAlpha = '<li class="nav-item"><a class="nav-link nav-techF" href="#" id="tech-filter-alpha">Alphabetical</a></li>';
  renderToDOM('#newest-btn', domStrNew);
  renderToDOM('#oldest-btn', domStrOld);
  renderToDOM('#alpha-btn', domStrAlpha);
};

export {
  techFilterBtn,
  techFilterOptions,
};

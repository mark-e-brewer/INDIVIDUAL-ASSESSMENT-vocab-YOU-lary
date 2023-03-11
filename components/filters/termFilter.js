import renderToDOM from '../../utils/renderToDOM';

const termFilterBtn = () => {
  const domString = '<li class="nav-item"><a class="nav-link" href="#" id="term-filter">Filter</a></li>';
  renderToDOM('#filter-btn', domString);
};

const termFilterOptions = () => {
  const domStrNew = '<li class="nav-item"><a class="nav-link nav-termF" href="#" id="term-filter-newest">Newest</a></li>';
  const domStrOld = '<li class="nav-item"><a class="nav-link nav-termF" href="#" id="term-filter-oldest">Oldest</a></li>';
  const domStrAlpha = '<li class="nav-item"><a class="nav-link nav-termF" href="#" id="term-filter-alpha">Alphabetical</a></li>';
  renderToDOM('#newest-btn', domStrNew);
  renderToDOM('#oldest-btn', domStrOld);
  renderToDOM('#alpha-btn', domStrAlpha);
};

export {
  termFilterBtn,
  termFilterOptions,
};

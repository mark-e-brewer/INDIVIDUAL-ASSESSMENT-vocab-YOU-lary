import renderToDOM from '../../utils/renderToDOM';

const techSearch = () => {
  const domString = '<input class="form-control" id="tech-search" placeholder="Search Cards">';
  renderToDOM('#search-span', domString);
};

export default techSearch;

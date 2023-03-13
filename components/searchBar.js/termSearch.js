import renderToDOM from '../../utils/renderToDOM';

const termSearch = () => {
  const domString = '<input class="form-control" id="term-search" placeholder="Search Cards">';
  renderToDOM('#search-span', domString);
};

export default termSearch;

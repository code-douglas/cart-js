import { search } from './selectors';
import { searchInKeyUp } from './filter';
import { render as init } from './render';
import { removeProduct } from './remove'
import _ from 'lodash';

search.addEventListener('keyup', _.debounce(searchInKeyUp, 400));

document.body.addEventListener("click", (event) => {
  event.preventDefault();

  const productId = event.target.getAttribute('data-id');
  if (productId) {
    removeProduct(productId);
  }

})

init();
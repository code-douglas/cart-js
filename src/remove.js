import products from "./products";

export function removeProduct(productId) {
  const index = products.findIndex(product => {
    return +product.id === +productId;
  });

  if (index > -1) {
    products.splice(index, 1);
    if (search.value !== '') {
      const productFiltered = productFilterInSearch(search.value);
      renderListAndHeader(productFiltered);
      if (productFiltered.length == 0) {
        search.value = '';
      }
      return;
    }

    renderListAndHeader(products);
  };

}
import products from "./products";

export function productFilterInSearch(searched) {
  return products.filter((product) => {
    return product.title.toLowerCase().includes(searched.toLowerCase());

  })
}

export function searchInKeyUp(event) {
  const searched = event.target.value;

  const productsFound = productFilterInSearch(searched);

  productsFound.length > 0 ? renderListAndHeader(productsFound) : listContainer.innerHTML = "Nenhum produto encontrado";

}
import products from "./products";

export function renderListAndHeader(products) {
  render(products)
  renderHeader(products)
}

export function renderHeader(products) {
  const totalProducts = products.length;

  header.innerHTML = totalProducts > 0 ? `O total de produtos disponiveis no momento é ${totalProducts}` : "Não há produtos disponiveis no momento"
}

export function render(products) {

  let list = "";

  if (products.length <= 0) {
    list += `<div id="no-products"> Nenhum produto disponivel no momento... </div>`
  } else {
    products.forEach((product, index) => {
      list +=
        `
          <div class="product">
            <div class="product-image">
              <img src="/assets/images/${product.poster}">
            </div>
            ${product.title} -  ${formatter.format(product.price)} 
            <a href="#"> 
              <div class="product-button" data-id="${product.id}">
                Remover
              </div>
            </a>
          </div>
        `
    });
  };
  listContainer.innerHTML = list;
}

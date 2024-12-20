const products = [
  {
    id: 1,
    title: 'Mouse',
    price: 19.9,
    poster: 'mouse.png',
  },
  {
    id: 2,
    title: 'Teclado',
    price: 190.9,
    poster: 'teclado.png',
  },
  {
    id: 3,
    title: 'Monitor',
    price: 1900.9,
    poster: 'monitor.png',
  },
  {
    id: 4,
    title: 'Notebook',
    price: 19000.9,
    poster: 'notebook.png',
  },
  {
    id: 5,
    title: 'Hd',
    price: 500.0,
    poster: 'hd.png',
  },
  {
    id: 6,
    title: 'Placa de vídeo',
    price: 10000.0,
    poster: 'placa-de-video.png',
  },
  {
    id: 7,
    title: 'Mouse',
    price: 19.9,
    poster: 'mouse.png',
  },
  {
    id: 8,
    title: 'Teclado',
    price: 190.9,
    poster: 'teclado.png',
  },
  {
    id: 9,
    title: 'Monitor',
    price: 1900.9,
    poster: 'monitor.png',
  },
  {
    id: 10,
    title: 'Notebook',
    price: 19000.9,
    poster: 'notebook.png',
  },
  {
    id: 11,
    title: 'Hd',
    price: 500.0,
    poster: 'hd.png',
  },
  {
    id: 12,
    title: 'Placa de vídeo',
    price: 10000.0,
    poster: 'placa-de-video.png',
  },
];

const formatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 2,
})

const listContainer = document.querySelector("#list");
const header = document.querySelector("#header");
const search = document.querySelector("#searchInput");

function searchInKeyUp(event) {
  const searched = event.target.value;

  const productsFound = productFilterInSearch(searched);

  productsFound.length > 0 ? renderListAndHeader(productsFound) : listContainer.innerHTML = "Nenhum produto encontrado";

}

function productFilterInSearch(searched) {
  return products.filter((product) => {
    return product.title.toLowerCase().includes(searched.toLowerCase());

  })
}

function renderListAndHeader(products) {
  render(products)
  renderHeader(products)
}

function renderHeader(products) {
  const totalProducts = products.length;

  header.innerHTML = totalProducts > 0 ? `O total de produtos disponiveis no momento é ${totalProducts}` : "Não há produtos disponiveis no momento"
}

function render(products) {

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

function removeProduct(productId) {
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

document.body.addEventListener("click", (event) => {
  event.preventDefault();

  const productId = event.target.getAttribute('data-id');
  if (productId) {
    removeProduct(productId);
  }

})

search.addEventListener('keyup', _.debounce(searchInKeyUp, 400));


renderListAndHeader(products)
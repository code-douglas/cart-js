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
];

const formatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 2,
})

const listContainer = document.querySelector("#list");
const header = document.querySelector("#header");
const search = document.querySelector("#search");

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
  }

  listContainer.innerHTML = list;

}

render(products);
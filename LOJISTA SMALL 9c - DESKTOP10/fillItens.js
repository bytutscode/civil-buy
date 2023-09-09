// aqui foi só para preencher os itens, não faz parte do projeto!

const products = [];

for (let p = 2; p < 10; p++) {
    products.push(`image${p}.jpg`);
}
const lorem = "Contrary to popular belief, Lorem Ipsum is not simplyrandom text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur"


const addProduct = image => {
    const productModel = document.querySelector('.product-card').cloneNode(true);
    productModel.querySelector('img').setAttribute('src', '../assets/media/' + image);
    productModel.querySelector('h2').innerText = lorem;

    const productContainer = document.querySelector('.products-container');
    productContainer.appendChild(productModel);
}

products.forEach((e, i) => {
    addProduct(e)
});
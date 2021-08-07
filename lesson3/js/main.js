const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                 this.goods = [...data];
                 this.render()
            });
    }
    
    _getProducts(){
      
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

class Cart {
    constructor(container = '.cart'){
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProductsCart()
            .then(data => { //data - объект js
                 this.goods = [...data.contents];
                 this.render()
            });
    }

    _getProductsCart(){
      
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    

   

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItemCart(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
}

class ProductItemCart {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.quantity = product.quantity;
        this.img = img;
    }
    render() {
        return `<div class="product-item-cart" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <p>${this.quantity} шт.</p>
                    <button class="buy-btn">Удалить</button>
                </div>
            </div>`
    }

}

let list = new ProductsList();
let button = document.querySelector('.btn-cart');
const buttonCart = () => {
 /*    document.querySelector('.cart').style.display = "felx"; */
    let cart = new Cart();
}
button.addEventListener('click', buttonCart, { once: true });
console.log(list.allProducts);


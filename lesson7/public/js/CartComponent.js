// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

Vue.component('cart', {
    data(){
      return {
          cartUrl: '/getBasket.json',
          cartItems: [],
          imgCart: 'https://placehold.it/200x150',
        //   showCart: false
      }
    },
    mounted(){
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for (let item of data.contents){
                    item.imgPath = `img/${item.product_name}_cart.png`;
                    this.$data.cartItems.push(item);
                }
            });
    },
    methods: {
        addProduct(item){
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if(find){
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        console.log(data)
                        if(data.result === 1){
                            find.quantity++
                        }
                    })
            } else {
                item.imgPath = `img/${item.product_name}_cart.png`;
                const prod = Object.assign({quantity: 1}, item);
                this.$parent.postJson(`/api/cart`, prod)
                    .then(data => {
                        if(data.result === 1){
                            this.cartItems.push(prod)
                        }
                    })
            }

            // this.$parent.getJson(`${API}/addToBasket.json`)
            //     .then(data => {
            //         if(data.result === 1){
            //             let find = this.cartItems.find(el => el.id_product === item.id_product);
            //             if(find){
            //                 find.quantity++;
            //             } else {
            //                 const prod = Object.assign({quantity: 1}, item);
            //                 this.cartItems.push(prod)
            //             }
            //         }
            //     })
        },
        remove(item){
            this.$parent.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if(item.quantity>1){
                            item.quantity--;
                        } else {
                            this.$parent.delJson(`/api/cart/${item.id_product}`, item)
                                
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }
                })
        },
        // cartCount() {
        //     return this.cartItems.reduce((summ, item) => summ + item.quantity, 0);
        //   },
          cartSumm() {
            return this.cartItems.reduce((summ, item) => summ + item.quantity*item.price, 0);
          }
    },
    template: `
            <div class="cart_list cart_list_contianer" >

                <cart-item v-for="item of cartItems" :key="item.id_product" :img="item.imgPath" :cart-item="item" @remove="remove">
                </cart-item> 
                    <div class="cart_list_total">
                        <div>TOTAL</div>
                        <div>\${{ cartSumm() }}</div>
                    </div>
                    <div class="cart_list_box-bottom">
                        <div class="cart_list_item-bottom">
                            <a class="cart_link_bottom" href="#">Checkout</a>
                        </div>
                        <div class="cart_list_item-bottom">
                            <a class="cart_link_bottom" href="#">Go to cart</a>
                        </div>
                    </div>
                </div> 
    `
});

Vue.component('cart-item', {
    props: ['img', 'cartItem'],
    template: `
            <div class="cart_list_box">
                    <div class="cart_list_img">
                        <img :src="img" alt="img_cart"  >
                    </div>
                    <div class="cart_list_box-text">
                        <h5 class="cart_list_h5">{{ cartItem.product_name }}</h5>
                        <p class="cart_list_stars"></p>
                        <p class="cart_list_prise">{{ cartItem.quantity }} x $ {{ cartItem.price }}</p>
                    </div>
                    <div class="cart_list_box-icon-del" >
                        <a href="#" @click="$emit('remove', cartItem)">
                        <i class="fas fa-times-circle cart_list_icon-del"></i>
                        </a>
                    </div>
                </div>  
    `
})
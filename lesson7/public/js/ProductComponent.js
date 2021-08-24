Vue.component('products', {
   data(){
       return {
           catalogUrl: '/catalogData.json',
           filtered: [],
           products: [],
           imgProduct: 'https://placehold.it/200x150'
       }
   },
    mounted(){
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data){
                    item.imgPath = `img/${item.product_name}.png`;
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
   template: `<div class="items">
                <product v-for="item of filtered" 
                :key="item.id_product" 
                :img="item.imgPath"
                :product="item"
                @add-product="$parent.$refs.cart.addProduct">
                </product>
               </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `
    <div class="item">
                <a class="link_item" href="singlepage.html">
                <div class="item_card">
                    <div class="item_image">
                    <img :src="img" alt="Photo" >
                    </div>
                    <h4 class="item_h4">{{product.product_name}}</h4>
                    <p class="item_prise">$ {{product.price}}</p>
                </div></a>
                <div class="add_block" @click="$emit('add-product', product)">
                    <a href="#" class="link_cart" >
                    <img src="img/link_cart.png" alt="" />
                    <p class="link_cart_text" >Add to Cart</p>
                    </a>
                </div>
            </div>
            
    `
})
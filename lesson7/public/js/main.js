
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'; 

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
        showMessage: false
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                    this.$refs.error.text = error;
                })
        },
        postJson(url, data){
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                    this.$refs.error.text = error;
                })
        },
        putJson(url, data){
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                    this.$refs.error.text = error;
                })
        },
        delJson(url, data){
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => {
                    result.json()
                    this.getJson('/api/cart')
                        .then(data => {
                            for (let item of data.contents) {
                                // item.imgPath = `img/${item.product_name}_cart.png`;
                                this.$data.cartItems.push(item);
                            }
                        })
                        .catch(error => {
                            console.log(error)
                            this.$refs.error.text = error;
                        })
                })
        },
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){


    }

});


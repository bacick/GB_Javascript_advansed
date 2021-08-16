Vue.component('find', {
    data () {
        return {
            userSearch: ''
        }
    },
    template:
    `
        <form action="#" class="search-form" @submit.prevent="filter(userSearch)">
            <input type="text" class="search-field" v-model="userSearch">
            <button type="submit" class="btn-search">
                <i class="fas fa-search"></i>
            </button>
        </form>
    `,
    methods: {
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.$root.filtered =  this.$root.products.filter(el => regexp.test(el.product_name));
        }
    }
                
            
})
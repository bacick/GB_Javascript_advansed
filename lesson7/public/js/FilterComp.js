Vue.component('filter-el', {
    data(){
      return {
          userSearch: ''
      }
    },
    template: `
    <div class="search">
              <form action="#" class="search_form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <details class="browse">
                  <summary class="browse-titel">
                    Browse
                    <i class="fas fa-caret-down browse-angle-down"></i>
                  </summary>
                  <div class="browse__menu">
                    <div class="pointer"></div>
                    <div class="mega-menu-block">
                      <h3 class="mega-menu_h3">
                        <a class="mega-menu_link_h3" href="product.html">Women</a>
                      </h3>
                      <hr class="mega-menu_line" />
                      <ul class="mega-menu_list">
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="singlepage.html"
                            >Dresses</a
                          >
                        </li>
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="singlepage.html"
                            >Tops</a
                          >
                        </li>
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="singlepage.html"
                            >Sweaters/Knits</a
                          >
                        </li>
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="singlepage.html"
                            >Jackets/Coats</a
                          >
                        </li>
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="singlepage.html"
                            >Blazers</a
                          >
                        </li>
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="singlepage.html"
                            >Denim</a
                          >
                        </li>
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="singlepage.html"
                            >Skirts/Shorts</a
                          >
                        </li>
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="singlepage.html"
                            >Accessories</a
                          >
                        </li>
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="singlepage.html"
                            >Leggings/Pant</a
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="mega-menu-block">
                      <h3 class="mega-menu_h3">
                        <a class="mega-menu_link_h3" href="product.html">Men</a>
                      </h3>
                      <hr class="mega-menu_line" />
                      <ul class="mega-menu_list">
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="singlepage.html"
                            >Dresses</a
                          >
                        </li>
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="singlepage.html"
                            >Tops</a
                          >
                        </li>
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="singlepage.html"
                            >Sweaters/Knits</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>
                <input
                  class="input-search" v-model="userSearch"
                  placeholder="Search for Item..."
                  type="text"
                />
                <button class="button_search" type="submit" >
                  <img alt="loupe" src="img/loupe.png" />
                </button>
              </form>
            </div>
    
    
    
    
    /* <form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <input type="text" placeholder="поиск" class="search-field" v-model="userSearch">
                <button type="submit" class="btn-search">
                    <i class="fas fa-search"></i>
                </button>
            </form> */`
})
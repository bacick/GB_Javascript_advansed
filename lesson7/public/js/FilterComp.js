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
                        <a class="mega-menu_link_h3" href="error.html">Women</a>
                      </h3>
                      <hr class="mega-menu_line" />
                      <ul class="mega-menu_list">
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="error.html"
                            >Dresses</a
                          >
                        </li>
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="error.html"
                            >Tops</a
                          >
                        </li>
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="error.html"
                            >Sweaters/Knits</a
                          >
                        </li>
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="error.html"
                            >Jackets/Coats</a
                          >
                        </li>
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="error.html"
                            >Blazers</a
                          >
                        </li>
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="error.html"
                            >Denim</a
                          >
                        </li>
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="error.html"
                            >Skirts/Shorts</a
                          >
                        </li>
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="error.html"
                            >Accessories</a
                          >
                        </li>
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="error.html"
                            >Leggings/Pant</a
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="mega-menu-block">
                      <h3 class="mega-menu_h3">
                        <a class="mega-menu_link_h3" href="error.html">Men</a>
                      </h3>
                      <hr class="mega-menu_line" />
                      <ul class="mega-menu_list">
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="error.html"
                            >Dresses</a
                          >
                        </li>
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="error.html"
                            >Tops</a
                          >
                        </li>
                        <li class="mega-menu_li">
                          <a class="mega-menu_link" href="error.html"
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
    
    
    
    
    `
})
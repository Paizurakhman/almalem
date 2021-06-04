<template>
  <div class="catalog p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/catalog">Каталог</nuxt-link>
      </div>
      <div class="p_title">
        <p>Каталог</p>
      </div>
      <div class="catalog_content" v-if="productsData">
        <div class="row">
          <div class="col-xl-3 col-lg-3 m_none">
            <div class="category_tab_nav">
              <no-ssr>
                <category-tab
                  @change_price="changePrice"
                  @filter="filterHandle"
                  :subcategories="productsData.subcategories"
                  :filters="productsData.filters"
                  :range_from="$route.query.from"
                  :range_to="$route.query.to"
                />
              </no-ssr>
            </div>
          </div>
          <div class="col-xl-9 col-lg-9">
            <div class="catalog_main">
              <div class="catalog_main_top">
                <div class="row">
                  <div class="col-xl-8 col-lg-10 t_index">
                    <div class="catalog_text">
                      <div class="catalog_text_title">
                        <p>Lorem ipsum</p>
                      </div>
                      <p>Sit amet</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-2 i_index">
                    <div class="catalog_main_img">
                      <img src="~/assets/img/banner_img.png" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab_content">
                <layout-tabBar
                  @viewMode="current = $event"
                  :current="current"
                  :products="productsData.products"
                  @sort="sortProducts"
                  :sortValue="$route.query.order_by"
                />
                <div class="tab_action d_none">
                  <button @click="showCategory" class="btn btn_outline">Фильтры</button>
                </div>
              </div>
              <div class="category_tab_nav d_none" v-if="mobileCategory">
                <no-ssr>
                  <category-tab
                    @change_price="changePrice"
                    @filter="filterHandle"
                    :subcategories="productsData.subcategories"
                    :filters="productsData.filters"
                    :range_from="$route.query.from"
                    :range_to="$route.query.to"
                  />
                </no-ssr>
              </div>
              <div class="product_card_item">
                <div class="row" v-if="current === 'grid'">
                  <div class="col-xl-4 col-lg-4 col-md-4" v-for="product in productsData.products.data" :key="product.id">
                    <product-card class="product_item" :product="product"></product-card>
                  </div>
                </div>

                <div v-if="current === 'list'" v-for="product in productsData.products.data" :key="product.id">
                  <product-col-card class="product_item responsive_p_i" :product="product"/>
                </div>
              </div>
            </div>
            <div class="pagination_content" v-if="productsData.products.last_page > 1">
              <paginate
                v-model="page"
                :page-count="productsData.products.last_page"
                :click-handler="myCallback"
                :page-range="3"
                :container-class="'pagination'"
                :prev-text="'<span class=prev></span>'"
                :next-text="'<span class=next></span>'"
              />
              <p>Показано с {{ productsData.products.from}} по {{productsData.products.to}} из {{productsData.products.total}} ({{productsData.products.current_page}} страниц)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slug",
  data(){
    return {
      page: 1,
      current: 'grid',
      mobileCategory: false,
      productsData: null,
      slug: this.$route.params.slug,
      obj: {}
    }
  },
  methods: {
    async allProducts () {
      if (Object.keys(this.obj).length > 0) {
        this.$router.push({ query: this.obj })
      }
      await this.$axios.get('get-products?lang=' + this.$store.state.lang + '&slug=' + this.slug, {
        params: this.obj
      })
        .then(res => {
          this.productsData = res.data
          this.page = res.data.products.current_page
        })
    },
    showCategory () {
      this.mobileCategory = !this.mobileCategory
    },
    async myCallback (currentPage) {
      this.obj['page'] = currentPage
      localStorage.setItem('object', JSON.stringify(this.obj))
      this.allProducts()

    },
    async sortProducts (value) {
      this.obj['order_by'] = value
      localStorage.setItem('object', JSON.stringify(this.obj))
      this.allProducts()

    },
    async changePrice (value) {
      this.obj['from'] = value[0]
      this.obj['to'] = value[1]
      this.obj['page'] = 1
      localStorage.setItem('object', JSON.stringify(this.obj))
      this.allProducts()
    },
    filterHandle(value) {
      this.obj['filter_id'] = value
      localStorage.setItem('object', JSON.stringify(this.obj))
      this.allProducts()
    }

  },
  async mounted(){
    this.page = this.$route.query.page
    if (localStorage.getItem('object')) {
      this.obj = JSON.parse(localStorage.getItem('object'))
    }
    this.allProducts()
  },
  destroyed() {
    this.obj = {}
    localStorage.removeItem('object')
  }
}
</script>

<style lang="scss" scoped>
  @media screen and (max-width: 1024px){
    .catalog_main_top img {
      position: absolute;
      width: 230%;
      right: 12%;
      height: 100%;
    }
  }
  .tab_action {
    margin-top: 20px;
  }
</style>

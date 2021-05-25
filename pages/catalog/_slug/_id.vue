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
      <div class="catalog_content" v-if="categoryData">
        <div class="row">
          <div class="col-xl-3 col-lg-3 m_none">
            <div class="category_tab_nav">
              <no-ssr>
                <category-tab />
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
                <layout-tabBar @viewMode="current = $event" :current="current"/>
                <div class="tab_action d_none">
                  <button @click="showCategory" class="btn btn_outline">Фильтры</button>
                </div>
              </div>
              <div class="category_tab_nav d_none" v-if="mobileCategory">
                <no-ssr>
                  <category-tab />
                </no-ssr>
              </div>
              <div class="product_card_item">
                <div class="row" v-if="current === 'grid'">
                  <div class="col-xl-4 col-lg-4 col-md-4" v-for="product in categoryData.products.data" :key="product.id">
                    <product-card class="product_item" :product="product"></product-card>
                  </div>
                </div>
                
                <div v-if="current === 'list'" v-for="product in categoryData.products.data" :key="product.id">
                  <product-col-card class="product_item responsive_p_i" :product="product"/>
                </div>
              </div>
            </div>
            <div class="pagination_items">
              <layout-pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "id",
  data(){
    return {
        current: 'grid',
        mobileCategory: false,
        slug: this.$route.params.slug,
        id: this.$route.params.id,
        categoryData: null
    }

  },
  methods: {
    showCategory () {
      this.mobileCategory = !this.mobileCategory
    }
  },
  async mounted() {
    await this.$axios.get('get-products?lang=' + this.$store.state.lang + '&slug=' + this.slug + '&slug=' + this.id)
    .then(res => {
      this.categoryData = res.data
    })
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

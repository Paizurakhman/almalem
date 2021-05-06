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
      <div class="catalog_content">
        <div class="row">
          <div class="col-xl-3 col-lg-3">
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
                  <div class="col-xl-8 col-lg-10">
                    <div class="catalog_text">
                      <div class="catalog_text_title">
                        <p>Lorem ipsum</p>
                      </div>
                      <p>Sit amet</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-2">
                    <div class="catalog_main_img">
                      <img src="~/assets/img/banner_img.png" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab_content">
                <layout-tabBar @viewMode="current = $event" :current="current"/>
              </div>
              <div class="product_card_item">
                <div class="row" v-if="current === 'grid'">
                  <nuxt-link class="col-xl-4 col-lg-4" to="/" v-for="s in 6" :key="s">
                    <product-card class="product_item"></product-card>
                  </nuxt-link>
                </div>

                <nuxt-link to="/" v-if="current === 'list'" v-for="s in 6" :key="s">
                  <product-col-card class="product_item responsive_p_i"/>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Catalog",
  data: () => ({
    current: 'grid'
  })
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
</style>

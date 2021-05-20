<template>
  <div class="new_products p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/discounts">Новинки</nuxt-link>
      </div>
      <div class="p_title">
        <p>Новинки</p>
      </div>
      <div class="tab_content">
        <layout-tabBar @viewMode="current = $event" :current="current"/>
      </div>
      <div class="product_card_item">
        <div class="row" v-if="current === 'grid'">
          <nuxt-link class="col-xl-3 col-lg-3 col-md-4" to="/" v-for="s in 6" :key="s">
            <product-card class="product_item"></product-card>
          </nuxt-link>
        </div>

        <nuxt-link to="/" v-if="current === 'list'" v-for="s in 6" :key="s">
          <product-col-card class="product_item"/>
        </nuxt-link>
      </div>
      <div class="pagination_items">
        <layout-pagination />
      </div>
    </div>
  </div>
</template>

<script>
import productCard from "@/components/productCard";
import productColCard from "@/components/productColCard";
export default {
  name: "new-products",
  components: { productCard, productColCard },
  data: () => ({
    current: 'grid'
  })
}
</script>

<style scoped>

</style>

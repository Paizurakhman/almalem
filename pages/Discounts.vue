<template>
  <div class="discounts_content p_page" v-if="saleData">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/discounts">Скидки</nuxt-link>
      </div>
      <div class="p_title">
        <p>{{ locale[this.$store.state.lang].contentTitle.sale }}</p>
      </div>
      <div class="tab_content">
        <layout-tabBar @viewMode="current = $event" :current="current" :products="saleData.products"/>
      </div>
      <div class="product_card_item">
        <div class="row" v-if="current === 'grid'">
          <div class="col-xl-3 col-lg-3" v-for="product in saleData.products.data" :key="product.id">
              <product-card class="product_item" :product="product"></product-card>
          </div>
        </div>

        <nuxt-link to="/" v-if="current === 'list'" v-for="product in saleData.products.data" :key="product.id">
          <product-col-card class="product_item" :product="product"/>
        </nuxt-link>
      </div>
      <div class="pagination_items">

      </div>
    </div>
  </div>
</template>

<script>
import { locale } from "../middleware/localeLang";

export default {
  name: "Discounts",
  data() {
    return {
      locale: locale,
      current: 'grid',
      saleData: null,
    }
  },
  async mounted() {
    await this.$axios.$get('sale?lang=' + this.$store.state.lang)
    .then(res => {
      this.saleData = res
    })
  }
}
</script>

<style scoped>

</style>

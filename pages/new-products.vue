<template>
  <div class="new_products p_page" v-if="newProducts">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/discounts">Новинки</nuxt-link>
      </div>
      <div class="p_title">
        <p>{{ locale[this.$store.state.lang].contentTitle.news }}</p>
      </div>
<!--      <div class="tab_content">-->
<!--        <layout-tabBar @viewMode="current = $event" :current="current" :products="newProducts.products"/>-->
<!--      </div>-->
      <div class="product_card_item">
        <div class="row" v-if="current === 'grid'">
          <div class="col-xl-3 col-lg-3 col-md-4" v-for="product in newProducts.products" :key="product.id">
            <product-card class="product_item" :product="product"></product-card>
          </div>
        </div>

        <div v-if="current === 'list'" v-for="product in newProducts.products" :key="product.id">
          <product-col-card class="product_item" :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {locale} from "../middleware/localeLang";
import productCard from "@/components/productCard";
import productColCard from "@/components/productColCard";
export default {
  name: "new-products",
  components: { productCard, productColCard },
  data() {
    return {
      locale: locale,
      current: 'grid',
      newProducts: null,
    }
  },
  async mounted() {
    await this.$axios.get('new?lang=' + this.$store.state.lang)
    .then(res => {
      this.newProducts = res.data
    })
  }
}
</script>

<style scoped>

</style>

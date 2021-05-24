<template>
  <div class="new_products p_page" v-if="newProducts">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/discounts">Скидки</nuxt-link>
      </div>
      <div class="p_title">
        <p>Новинки</p>
      </div>
      <div class="tab_content">
        <layout-tabBar @viewMode="current = $event" :current="current"/>
      </div>
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
  data() {
    return {
      current: 'grid',
      newProducts: null
    }
  },
  async mounted() {
    await this.$axios.get('new?lang=' + this.$store.state.lang)
    .then(res => {
      this.newProducts = res.data
      console.log(res.data);
    })
    console.log('mounted');
  }
}
</script>

<style scoped>

</style>

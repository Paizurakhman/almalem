<template>
  <div class="discounts_content p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/discounts">Скидки</nuxt-link>
      </div>
      <div class="p_title">
        <p>Скидки</p>
      </div>
      <div class="tab_content">
        <layout-tabBar @viewMode="current = $event" :current="current"/>
      </div>
      <div class="product_card_item">
        <div class="row" v-if="current === 'grid'">
          <nuxt-link class="col-xl-3 col-lg-3" to="/" v-for="s in 6" :key="s">
              <product-card class="product_item"></product-card>
          </nuxt-link>
        </div>

        <nuxt-link to="/" v-if="current === 'list'" v-for="s in 6" :key="s">
          <product-col-card class="product_item"/>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Discounts",
  data: () => ({
    current: 'grid'
  })
}
</script>

<style scoped>

</style>

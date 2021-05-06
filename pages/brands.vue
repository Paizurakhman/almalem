<template>
  <div class="brands p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/brands">Бренды</nuxt-link>
      </div>
      <div class="p_title">
        <p>Бренды</p>
      </div>
      <div class="brands_content">
        <div class="row">
            <div class="col-xl-3 col-lg-3" v-for="i in 8" :key="i">
              <div class="brand_item">
                <img src="~/assets/img/barder.png" alt="">
                <p class="brand_text">Brand</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "brands"
}
</script>

<style scoped>

</style>

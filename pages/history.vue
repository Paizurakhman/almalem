<template>
  <div class="history p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/brands">Бренды</nuxt-link>
      </div>
      <div class="p_title">
        <p>История заказов</p>
      </div>
      <div class="history_content">
        <order_card />
      </div>
    </div>
  </div>
</template>

<script>
import order_card from "@/components/order_card";
export default {
  name: "history",
  components: {order_card}
}
</script>

<style scoped>

</style>

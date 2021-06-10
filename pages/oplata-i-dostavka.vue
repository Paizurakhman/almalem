<template>
  <div class="oplata-i-dostavka p_page" v-if="deliveryData">
      <div class="container">
        <div class="page_links">
          <nuxt-link to="/">Главная</nuxt-link>
          <img src="~/assets/icon/arrow_silver.svg" alt="">
          <nuxt-link to="/oplata-i-dostavka">Доставка и оплата</nuxt-link>
        </div>
        <div class="p_title">
          <p>{{ deliveryData.delivery.title }}</p>
        </div>
        <div class="about_content">
          <p v-html="deliveryData.delivery.description"></p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "oplata-i-dostavka",
  data() {
    return {
      deliveryData: null
    }
  },
  head() {
    return {
      title: 'Доставка и оплата | almalem'
    }
  },
  async mounted() {
    await this.$axios.get('get-delivery?lang=' + this.$store.state.lang)
    .then(res => {
      this.deliveryData = res.data
    })
  }
}
</script>

<style scoped>

</style>

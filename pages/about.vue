<template>
  <div class="about p_page" v-if="companyData">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/about">О компании</nuxt-link>
      </div>
      <div class="p_title">
        <p>{{ companyData.company.title }}</p>
      </div>
      <div class="about_content">
        <p v-html="companyData.company.description"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      companyData: null
    }
  },
  async mounted() {
    await this.$axios.get('get-company?lang=' + this.$store.state.lang)
    .then(res => {
      this.companyData = res.data
    })
  }
}
</script>

<style scoped>

</style>

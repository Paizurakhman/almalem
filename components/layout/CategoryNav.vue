<template>
  <div class="category_nav">
    <div class="container">
      <div class="row">
        <div class="col-xl-3">
          <div class="category_nav_title">
            <nuxt-link to="/catalog">Военная техника</nuxt-link>
          </div>
          <div class="category_nav_text">
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="category_nav_title">
            <nuxt-link to="/catalog">Гидротехника, гидравлика</nuxt-link>
          </div>
          <div class="category_nav_text">
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="category_nav_title">
            <nuxt-link to="/catalog">Вычислительная техника</nuxt-link>
          </div>
          <div class="category_nav_text">
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="category_nav_title">
            <nuxt-link to="/catalog">Теплотехника, энергетика</nuxt-link>
          </div>
          <div class="category_nav_text">
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="category_nav_title">
            <nuxt-link to="/catalog">Светотехника</nuxt-link>
          </div>
          <div class="category_nav_text">
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="category_nav_title">
            <nuxt-link to="/catalog">Фототехника</nuxt-link>
          </div>
          <div class="category_nav_text">
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
            <nuxt-link to="/catalog">Lorem ipsum</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: "CategoryNav",
  methods: {
    ...mapActions([
      'showAction'
    ])
  },
  watch: {
    $route(to, from) {
      this.showAction()
    }
  }
}
</script>

<style scoped>

</style>

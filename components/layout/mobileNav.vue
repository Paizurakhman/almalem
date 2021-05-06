<template>
  <div class="mobile_nav">
    <div class="nav_links">
      <ul>
        <li>
          <nuxt-link to="/">ГЛАВНАЯ</nuxt-link>
        </li>
        <li>
          <div class="drop_down" @click="showCatalogAction">
            <span>КАТАЛОГ ТОВАРОВ</span>
            <img :class="{ active_dropdown: getShowCatalog}" src="~/assets/icon/main/black_arrow.svg" alt="">
          </div>
          <div class="catalog_title" v-if="getShowCatalog">
            <nuxt-link to="/catalog">ВОЕННАЯ ТЕХНИКА</nuxt-link>
            <img src="~/assets/icon/main/black_arrow.svg" alt="">
          </div>
          <div class="catalog_title" v-if="getShowCatalog">
            <nuxt-link to="/catalog">ГИДРОТЕХНИКА</nuxt-link>
            <img src="~/assets/icon/main/black_arrow.svg" alt="">
          </div>
        </li>
        <li>
          <nuxt-link to="/oplata-i-dostavka">ОПЛАТА И ДОСТАВКА</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/novinki">НОВИНКИ</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/discounts">СКИДКИ</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/brands">БРЕНДЫ</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">О КОМПАНИИ</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contacts">КОНТАКТЫ</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  name: "mobileNav",
  methods: {
    ...mapActions([
      'showCatalogAction'
    ])
  },
  computed: {
    ...mapGetters([
      'getShowCatalog'
    ])
  }
}
</script>

<style scoped>

</style>

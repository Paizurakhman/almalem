<template>
  <div class="mobile_nav">
    <div class="nav_links" v-if="headerData">
      <ul>
        <li>
          <nuxt-link to="/">ГЛАВНАЯ</nuxt-link>
        </li>
        <li>
          <div class="drop_down" @click="catalogAction">
            <span>КАТАЛОГ ТОВАРОВ</span>
            <img :class="{ active_dropdown: getShowCatalog}" src="~/assets/icon/main/black_arrow.svg" alt="">
          </div>
          <div v-for="(category, index) in headerData.categories" :key="category.id" v-if="getShowCatalog">
            <div class="catalog_title">
              <nuxt-link :to="{ name: 'catalog-slug', params: { slug: category.slug }}">{{ category.title.toUpperCase() }}</nuxt-link>
              <img :class="{ active_dropdown: s === index }" @click="showCategory(index)" src="~/assets/icon/main/black_arrow.svg" alt="">
            </div>
            <div class="category_over">
              <div class="sub_category" v-for="subcategory in category.subcategories" :key="subcategory.id">
                <nuxt-link :to="{ name: 'catalog-slug', params: { slug: subcategory.slug }}" v-if="s === index">{{ subcategory.title }}</nuxt-link>
              </div>
            </div>
          </div>
        </li>
        <li>
          <nuxt-link to="/oplata-i-dostavka">ОПЛАТА И ДОСТАВКА</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/new-products">НОВИНКИ</nuxt-link>
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
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "mobileNav",
  data() {
    return {
      headerData: null,
      s: -1
    }
  },
  methods: {
    ...mapActions([
      'showCatalogAction'
    ]),
    catalogAction() {
      this.showCatalogAction()
      this.s = -1
    },
    showCategory(index) {
      if (this.s === index) {
        this.s = -1
      }
      else  {
        this.s = index
      }
    }
  },
  computed: {
    ...mapGetters([
      'getShowCatalog'
    ])
  },
  mounted() {
    this.token = localStorage.getItem('token')
    this.$axios.get('get-header?lang=' + this.$store.state.lang)
      .then(res => {
        this.headerData = res.data;
        // this.city = res.data.cities[0].id
      })
  }

}
</script>

<style scoped>

</style>

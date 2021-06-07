<template>
  <div class="mobile_nav">
    <div class="nav_links" v-if="headerData">
      <ul>
        <li>
          <nuxt-link to="/">{{ locale[this.$store.state.lang].links.main}}</nuxt-link>
        </li>
        <li>
          <div class="drop_down" @click="catalogAction">
            <span>{{ locale[this.$store.state.lang].links.catalog}}</span>
            <img :class="{ active_dropdown: getShowCatalog}" src="~/assets/icon/main/black_arrow.svg" alt="">
          </div>
          <div v-for="(category, index) in headerData.categories" :key="category.id" v-if="getShowCatalog">
            <div class="catalog_title" v-if="category.title">
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
          <nuxt-link to="/oplata-i-dostavka">{{ locale[this.$store.state.lang].links.oplata}}</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/new-products">{{ locale[this.$store.state.lang].links.news}}</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/discounts">{{ locale[this.$store.state.lang].links.sales}}</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/brands">{{ locale[this.$store.state.lang].links.brands}}</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">{{ locale[this.$store.state.lang].links.about}}</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contacts">{{ locale[this.$store.state.lang].links.contacts}}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { locale } from "../../middleware/localeLang";
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "mobileNav",
  data() {
    return {
      locale: locale,
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

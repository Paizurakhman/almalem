<template>
  <div class="brands p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/brands">Бренды</nuxt-link>
      </div>
      <div class="p_title">
        <p>{{ locale[this.$store.state.lang].contentTitle.brands }}</p>
      </div>
      <div class="brands_content" v-if="brandData">
        <div class="row">
            <div class="col-xl-3 col-lg-3" v-for="brand in brandData.brands" :key="brand.id">
              <nuxt-link :to="{
                name: 'brands-id',
                params: {
                  id: brand.id
                }
              }"
              >
                <div class="brand_item">
                  <v-lazy-image :src="'http://cdn.astudiodigital.ru/' + brand.image" alt=""/>
                  <p class="brand_text">{{ brand.title }}</p>
                </div>
              </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {locale} from "../../middleware/localeLang";

import {mapActions} from "vuex";

export default {
  name: "brands",
  data () {
    return {
      locale: locale,
      brandData: null,
    }
  },
  methods: {
    ...mapActions([
      'LANG_ACTION'
    ])
  },
  async mounted() {
    this.LANG_ACTION()
    await this.$axios.get('/get-brands?lang=' + this.$store.state.lang)
    .then(res => {
      this.brandData = res.data
    })
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="home_page" v-if="homePageData">
    <div class="p_page">
    <div class="container">
      <div class="main_content">
        <div class="row">
          <div class="col-xl-3 col-lg-3 m_none">
            <div class="catalog_option" v-if="homePageData.header">
              <CatalogOption :catalog="homePageData.header.categories.other"/>
            </div>
          </div>
          <div class="col-xl-9 col-lg-9">
            <div class="banner_content">
              <div class="banner_image">
                <img src="~/assets/img/banner_image.png" alt="banner">
              </div>
              <div class="banner_text">
                <h1>- Гидравлика</h1>
                <h1>Качественные детали для вашего автомобиля</h1>
              </div>
              <div class="banner_action">
                <button class="btn btn_main">Купить сейчас</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="principles_content">
        <div class="row">
          <div class="col-xl-4 col-lg-4">
            <div class="principle">
              <div class="principle_img">
                <img src="~/assets/icon/home/dostavka.svg" alt="">
              </div>
              <div class="principle_title">
                <p>Доставка</p>
                <p>Доставка по всему Казахстану</p>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4">
            <div class="principle">
              <div class="principle_img">
                <img src="~/assets/icon/home/podderjka.svg" alt="">
              </div>
              <div class="principle_title">
                <p>Поддержка</p>
                <p>Поддержка 24 часа в день</p>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4">
            <div class="principle">
              <div class="principle_img">
                <img src="~/assets/icon/home/secure.svg" alt="">
              </div>
              <div class="principle_title">
                <p>Защита платежей</p>
                <p>Мы защитим ващи данные</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bestsellers_content">
        <layout-slider :title="'Бестселлеры'" :products="homePageData.products.best"/>
      </div>
    </div>
    <other-categories :other="homePageData.categories.other"/>
    <div class="container">
      <div class="sales_content">
        <layout-slider :title="'Скидки'" :products="homePageData.products.sale"/>
      </div>
      <div class="company_content">
        <div class="company_logos" v-for="company in companies" :key="company.id">
          <img :src="company.src" alt="logos">
        </div>
      </div>
    </div>
    </div>
    <div class="footer_banner">
      <div class="container">
        <div class="text_block">
          <div class="footer_banner_title">
            <h1>Станьте партнером Almalem</h1>
          </div>
          <div class="footer_banner_text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <button class="btn btn_white">Подробнее</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      companies: [
        {
          id: 1,
          src: require('~/assets/icon/companies/codecanyon.svg')
        },
        {
          id: 2,
          src: require('~/assets/icon/companies/graphicriver.svg')
        },
        {
          id: 3,
          src: require('~/assets/icon/companies/themeforest.svg')
        },
        {
          id: 4,
          src: require('~/assets/icon/companies/audiojungle.svg')
        },
        {
          id: 5,
          src: require('~/assets/icon/companies/activeden.svg')
        },
      ],
      homePageData: null
    }
  },
  computed: {
    ...mapState([
      'showNav'
    ])
  },
  async mounted() {
    await this.$axios.get('home-page?lang=' + this.$store.state.lang)
    .then(res => {
      this.homePageData = res.data
    })
  }
}
</script>

<style lang="scss">

</style>

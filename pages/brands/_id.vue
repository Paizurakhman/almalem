<template>
  <div class="inner_brand p_page" v-if="innerData">
    <div class="container">
        <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/brands">Бренды</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/brands">{{ innerData.brands.title }}</nuxt-link>
      </div>
      <div class="p_title">
        <p>{{ locale[this.$store.state.lang].contentTitle.brands }}</p>
      </div>
      <div class="inner_brand_content">
        <div class="inner_brand_wrapper">
          <div class="brand_item">
            <img :src="this.$store.state.imageUrl + innerData.brands.image" alt="">
            <p class="brand_text">{{ innerData.brands.title }}</p>
          </div>
        </div>
        <div class="inner_brand_title">
          <p v-html="innerData.brands.content"></p>
        </div>
      </div>
    </div>
    <div class="container">
      <p class="bolder_text">{{ locale[this.$store.state.lang].contentTitle.company_products }}</p>
      <div class="sales_content">
        <div class="row">
          <div class="col-xl-3 col-lg-3" v-for="product in innerData.products.data" :key="product.id">
            <product-card class="product_item" :product="product"></product-card>
          </div>
        </div>
      </div>
      <div class="pagination_content" v-if="innerData.products.last_page > 1">
        <paginate
          v-model="page"
          :page-count="innerData.products.last_page"
          :click-handler="myCallback"
          :page-range="3"
          :container-class="'pagination'"
          :prev-text="'<span class=prev></span>'"
          :next-text="'<span class=next></span>'"
        />
        <p>Показано с {{ innerData.products.from}} по {{innerData.products.to}} из {{innerData.products.total}} ({{innerData.products.current_page}} страниц)</p>
      </div>
    </div>
  </div>
</template>

<script>
import {locale} from "../../middleware/localeLang";

export default {
    name: 'id',
    data() {
        return {
          locale: locale,
          page: 1,
          id: this.$route.params.id,
          innerData: null
        }
    },
    async mounted () {
        await this.$axios.get('get-brands_page?lang=' + this.$store.state.lang + '&brand_id=' + this.id)
        .then(res => {
          this.innerData = res.data
        })
    }
}
</script>

<style lang="scss">
  .inner_brand_wrapper {
    margin: 0 30px 10px 0;
    float: left;
    .brand_item {
      display: flex;
      align-items: center;
      padding: 16px;
      background: #EEEEEE;
      width: 100%;
    }
    p {
      margin: 0 20px;
      color: #000000;
      font-weight: 500;
    }
    img {
      min-height: 100px;
      height: 100px;
      object-fit: cover;
    }
  }
  .inner_brand_content {
    min-height: 200px;
  }
</style>

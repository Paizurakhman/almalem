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
        <p>Бренды</p>
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
    <div class="container" v-if="innerData.products.data.length">
      <div class="sales_content">
        <layout-slider :title="'Похожие товары'" :products="innerData.products.data"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'id',
    data() {
        return {
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
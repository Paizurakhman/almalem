<template>
  <nuxt-link :to="{
    name: 'product-details-slug',
    params: {
      slug: product.slug
    }
  }">
      <div class="product_card">
        <div class="product_title">
          {{ product.title }}
        </div>
        <div class="card_header overlay">
          <div class="company_name">
            <p>Company</p>
          </div>
          <img src="~/assets/icon/black_heart.svg" alt="">
        </div>
        <div class="main_img">
          <div class="sale" v-if="product.sale">-{{product.sale}}%</div>
          <img
            :src="this.$store.state.imageUrl + product.images.image" 
            alt=""
            style="object-fit:cover"
            ref="image"
            :height="width"
          >
        </div>
        <div class="product_card_bottom">
          <div class="price">
            <p><span class="new_price">{{ product.current_price}} ₸</span> <span v-if="product.sale" class="old_price">1400₸</span></p>
          </div>
          <img class="overlay" src="~/assets/icon/black_basket.svg" alt="">
        </div>
      </div>
  </nuxt-link>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  name: "productCard",
  props: ['product'],
  data() {
    return {
      width: ''
    }
  },
  methods: {
  },
  mounted() {
    if(this.product) {
      this.width = this.$refs.image.width + 1
    }
  }
  
}
</script>

<style scoped>

</style>

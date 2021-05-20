<template>
    <div class="slider_slick">
      <div class="slider_top">
        <div class="page_title">
          <p>{{ title }}</p>
        </div>
        <div class="carousel_arrows">
          <button class="prev_btn" @click="prevSlide">
            <span><img src="~/assets/icon/prev_slider.svg" alt=""></span>
          </button>
          <button class="next_btn" @click="nextSlide">
            <span><img src="~/assets/icon/next.svg" alt=""></span>
          </button>
        </div>
      </div>
      <VueSlickCarousel class="slider_component" v-bind="settings" ref="carousel_products">
        <nuxt-link to="/" v-for="s in 6" :key="s">
          <product-card class="card_carousel"/>
        </nuxt-link>
      </VueSlickCarousel>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "Slider",
  props: ['title'],
  data: () => ({
    settings: {
      "dots": false,
      "arrows": false,
      "infinite": false,
      "speed": 500,
      "slidesToShow": 4,
      "slidesToScroll": 1,
      "initialSlide": 0,
      "responsive": [
        {
          "breakpoint": 1027,
          "settings": {
            "slidesToShow": 4,
            "slidesToScroll": 1,
            "infinite": true,
            arrows: false
          }
        },
        {
          "breakpoint": 768,
          "settings": {
            "slidesToShow": 2,
            "slidesToScroll": 1,
            arrows: false
          }
        },
        {
          "breakpoint": 480,
          "settings": {
            arrows: false,
            "slidesToShow": 1,
            "slidesToScroll": 1
          }
        }
      ]
    }
  }),
  methods: {
    prevSlide() {
      this.$refs.carousel_products.prev()
    },
    nextSlide() {
      this.$refs.carousel_products.next()
    },
  },
}
</script>

<style scoped>

</style>

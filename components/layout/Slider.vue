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
        <div v-for="product in products" :key="product.id">
          <product-card class="card_carousel" :product="product"/>
        </div>
      </VueSlickCarousel>
    </div>
</template>

<script>
export default {
  name: "Slider",
  props: ['title', 'products'],
  data: () => ({
    settings: {
      "dots": false,
      "arrows": false,
      "infinite": true,
      "slidesToShow": 4,
      "focusOnSelect": false,
      "slidesToScroll": 1,
      "initialSlide": 0,
      "responsive": [
        {
          "breakpoint": 1027,
          "settings": {
            "slidesToShow": 3,
            "slidesToScroll": 1,
            "infinite": true,
          }
        },
        {
          "breakpoint": 768,
          "settings": {
            "slidesToShow": 2,
            "slidesToScroll": 1,
          }
        },
        {
          "breakpoint": 480,
          "settings": {
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

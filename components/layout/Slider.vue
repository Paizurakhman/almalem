<template>
    <div class="slider_slick">
      <div class="slider_top">
        <div class="page_title">
          <p>{{ title }}</p>
        </div>
      </div>
      <VueSlickCarousel class="slider_component" v-bind="settings">
        <nuxt-link to="/" v-for="s in 6" :key="s">
          <product-card class="card_carousel" />
        </nuxt-link>
      </VueSlickCarousel>
    </div>
</template>

<script>
export default {
  name: "Slider",
  props: ['title'],
  data: () => ({
    settings: {
      "dots": false,
      "arrows": true,
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
  })
}
</script>

<style scoped>

</style>

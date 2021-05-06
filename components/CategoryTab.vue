<template>
  <div class="category_tab">
    <div class="category_content">
      <div class="category_title">
        <p class="b_500_16_text">Категория</p>
      </div>
      <div class="category_text">
        <p>Механические устройства</p>
        <p>Механические устройства</p>
        <p>Механические устройства</p>
        <p>Механические устройства</p>
        <p>Механические устройства</p>
        <p>Механические устройства</p>
      </div>
    </div>
    <div class="category_content">
      <div class="category_title">
        <p class="b_500_16_text">Фильтр по цене</p>
      </div>
      <div class="range_slider">
        <no-ssr>
          <vue-range-slider :bg-style="bgStyle" :tooltip-style="tooltipStyle" :process-style="processStyle" v-model="value"></vue-range-slider>
        </no-ssr>
      </div>
    </div>
    <div class="category_content">
      <div class="category_title">
        <p class="b_500_16_text">Фильтр</p>
      </div>
      <div class="checks">
        <input type="checkbox">
        <label>Фильтр</label>
      </div>
      <div class="checks">
        <input type="checkbox">
        <label>Фильтр</label>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'

export default {
  name: "CategoryTab",
  components: {VueRangeSlider},
  data() {
    return {
      value: [0, 100],
      tooltipStyle: '',
      processStyle: '',
      min: 0,
      max: 250,
      bgStyle: ''
    }
  },
  created() {
    this.min = 0
    this.max = 250
    this.bgStyle = {
      backgroundColor: '#ffffff',
      boxShadow: 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.5)'
    }
    this.tooltipStyle = {
      backgroundColor: 'red',
      borderColor: 'red'
    }
    this.processStyle = {
      backgroundColor: '#59367C'
    }
  }
}
</script>

<style scoped>

</style>

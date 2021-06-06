
<template>
  <div class="category_tab">
    <div class="category_content">
      <div class="category_title">
        <p class="b_500_16_text">Категория</p>
      </div>
      <div class="category_text">
        <div v-for="category in subcategories" :key="category.id" class="sub_items">
          <nuxt-link
            :to="{
              name: 'catalog-slug',
              params: { slug: category.slug }
            }"
          >
            {{ category.title }}
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="category_content">
      <div class="category_title">
        <p class="b_500_16_text">Фильтр по цене</p>
      </div>
      <div class="range_slider">
          <range-slider
            v-bind="setting"
            :bg-style="bgStyle"
            :process-style="processStyle"
            v-model="value"
            :clickable="false"
            @drag-end="changePrice"
          ></range-slider>
      </div>
      <div class="range_price">
        <p>{{ value[0] }} ₸</p>
        <p>{{ value[1] }} ₸</p>
      </div>
    </div>
    <div class="category_content">
      <div class="category_title">
        <p class="b_500_16_text">Фильтр</p>
      </div>
      <div class="checks" v-for="filter in filters" :key="filter.id">
        <label class="checkbox_custom"  v-for="item in filter.filter_items" :key="item.id">
          <input @change="filterHandle" v-model="filteredValue" type="checkbox" :value="item.id">
          <span>{{ item.title }}</span>
        </label>
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
  props: ['subcategories', 'filters', 'range_from', 'range_to'],
  data() {
    return {
      value: [0, 1000000],
      processStyle: '',
      bgStyle: '',
      filteredValue: [],
      setting: {
        dotSize: 25,
        max: 1000000,
        step: 100
      }
    }
  },
  created() {
    this.bgStyle = {
      backgroundColor: '#ffffff',
      boxShadow: 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.5)'
    }
    this.processStyle = {
      backgroundColor: '#59367C'
    }
  },
  methods: {
    changePrice () {
      this.$emit('change_price', this.value)
    },
    filterHandle () {
      this.$emit('filter', this.filteredValue)
    }
  },
  mounted() {
    if (this.range_from && this.range_to) {
      this.value = [this.range_from, this.range_to]
    }
    let filter = JSON.parse(localStorage.getItem('object'))?.filter_id
    if (filter) {
      for (const filter_id of filter) {
        this.filteredValue.push(filter_id)
      }
    }
  }
}
</script>
<style scoped>
</style>

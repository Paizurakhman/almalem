<template>
  <div class="tab_bar">
    <div class="row">
      <div class="col-xl-6 col-md-6">
          <div class="tab_left_side">
            <div class="m_margin">
              <div class="view_action">
                <svg
                  @click="viewMode('grid')"
                  :class="{ activeTab: current === 'grid'}"
                  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="#333333"/>
                  <circle cx="8" cy="2" r="2" fill="#333333"/>
                  <circle cx="14" cy="2" r="2" fill="#333333"/>
                  <circle cx="2" cy="8" r="2" fill="#333333"/>
                  <circle cx="14" cy="8" r="2" fill="#333333"/>
                  <circle cx="8" cy="8" r="2" fill="#333333"/>
                  <circle cx="2" cy="14" r="2" fill="#333333"/>
                  <circle cx="8" cy="14" r="2" fill="#333333"/>
                  <circle cx="14" cy="14" r="2" fill="#333333"/>
                </svg>
                <svg
                  @click="viewMode('list')"
                  :class="{ activeTab: current === 'list'}"
                  width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="16" height="2" fill="#333333"/>
                  <rect y="6" width="16" height="2" fill="#333333"/>
                  <rect y="12" width="16" height="2" fill="#333333"/>
                </svg>
              </div>
            </div>
            <div class="m_margin">
              <div class="tab_bar_text" v-if="products">
                <p v-if="products.data.length">Показано с {{ products.from}} по {{products.to}} из {{products.total}} ({{products.current_page}} страниц)</p>
                <p v-else>{{ locale[this.$store.state.lang].contentTitle.no_products}}</p>
              </div>
            </div>
          </div>
      </div>
      <div class="col-xl-6 col-md-6 m_margin">
        <div class="tab_bar_filter">
          <div class="tab_bar_filter_item">
            <p>{{ locale[this.$store.state.lang].contentTitle.sort}}</p>
            <select name="sort" class="sort_action" v-model="sortVal">
              <option value="">{{ locale[this.$store.state.lang].sort_by_price.default}}</option>
              <option value="ASC">{{ locale[this.$store.state.lang].sort_by_price.asc}}</option>
              <option value="DESC">{{ locale[this.$store.state.lang].sort_by_price.desc}}</option>
            </select>
          </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import {locale} from "../../middleware/localeLang";

export default {
  name: "TabBar",
  props: ['current', 'products', 'sortValue'],
  data() {
    return {
      sortVal: this.sortValue || '',
      locale: locale
    }
  },
  methods: {
    viewMode(value) {
      this.$emit('viewMode', value)
    }
  },
  watch: {
    sortVal(e){
      this.$emit('sort', e)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

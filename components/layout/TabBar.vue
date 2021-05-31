<template>
  <div class="tab_bar">
    <div class="row">
      <div class="col-xl-6 col-md-6">
        <div class="row align-items-center">
          <div class="col-xl-3 col-md-3 m_margin">
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
          <div class="col-xl-9 col-md-9 m_margin">
            <div class="tab_bar_text" v-if="products">
              <p v-if="products.data.length">Показано с {{ products.from}} по {{products.to}} из {{products.total}} ({{products.current_page}} страниц)</p>
              <p v-else>Нет продуктов</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-md-6 m_margin">
        <div class="tab_bar_filter">
          <div class="tab_bar_filter_item">
            <p>Сортировать:</p>
            <select name="sort" class="sort_action" v-model="sortVal">
              <option value="">По умолчанию</option>
              <option value="ASC"> По возрастанию цены</option>
              <option value="DESC"> По убыванию цены</option>
            </select>
          </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  props: ['current', 'products'],
  data() {
    return {
      sortVal: ""
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

<template>
  <div class="tab_bar">
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
    <div class="tab_bar_text">
      <p>Показано с 1 по 6 из 6 (1 страниц)</p>
    </div>
    <div class="tab_bar_filter">
      <p>Сортировать:</p>
      <div class="sort_action">
        <span>Умолчанию</span>
        <img src="~/assets/icon/main/black_arrow.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  props: ['current'],
  methods: {
    viewMode(value) {
      this.$emit('viewMode', value)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

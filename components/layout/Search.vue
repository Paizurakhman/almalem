<template>
  <div class="search" :class="{search_active: search.length >= 3}">
    <form>
      <input
        type="text"
        :placeholder="locale[this.$store.state.lang].header.searchText"
        v-model="search"
        @input="handleSearch"
      >
      <button>
        <span><img src="~/assets/icon/main/search.svg" alt=""></span>
      </button>
    </form>
    <div class="result" v-if="search.length >= 3 && searchData">
      <div v-if="searchData.length" @click="handleClick">
        <nuxt-link :to="{
          name: 'product-details-slug',
          params: { slug: result.slug}}"
                   v-for="result in searchData"
                   :key="result.slug"
        >{{ result.title }}</nuxt-link>
      </div>
      <div v-else class="no_res">Совпадении нет !</div>
    </div>
  </div>
</template>

<script>
import {locale} from "../../middleware/localeLang";

export default {
  name: "Search",
  data() {
    return {
      search: '',
      searchData: null,
      locale: locale
    }
  },
  methods: {
    handleSearch (e) {
      if (this.search.length >= 3) {
        this.$axios.$get('search?lang=' + this.$store.state.lang + '&text=' + this.search)
        .then(res => {
          this.searchData = res.data
        })
      }
    },
    handleClick () {
      this.search = ''
      this.$emit('empty')
    }
  }
}
</script>

<style scoped lang="scss">

</style>

<template>
  <div class="category_nav">
    <div class="container">
      <div class="row">

        <div class="col-xl-3" v-for="category in categories" :key="category.id">
          <div class="category_nav_title">
            <nuxt-link :to="{ name: 'catalog-slug', params: { slug: category.slug}}">{{ category.title }}</nuxt-link>
          </div>
          <div class="category_nav_text">
            <nuxt-link v-for="catalog in category.subcategories" :key="catalog.id" :to="{
              name: 'catalog-slug',
              params: {
                slug: catalog.slug
              }
            }">
              {{ catalog.title }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: "CategoryNav",
  props: ['categories'],
  methods: {
    ...mapActions([
      'showAction'
    ])
  },
  watch: {
    $route(to, from) {
      this.showAction()
    }
  }
}
</script>

<style scoped>

</style>

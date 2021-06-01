<template>
  <div class="catalog_option">
    <div class="option_header">
      <img src="~/assets/icon/menu.svg" alt="">
      <div class="option_title">
        <p>Каталог</p>
      </div>
    </div>
    <div class="catalog_option_item">
      <div v-for="item in catalog" :key="item.id">
        <nuxt-link :to="{ name: 'catalog-slug', params: { slug: item.slug, page: 1 }}">
          <div class="option_item" @mouseover="handleCategory(item.id)"
             @mouseleave="handleLeave">
          <p class="catalog_t">{{ item.title }}</p>
          <img src="~/assets/icon/main/black_arrow.svg" alt="">
          <div
            class="catalog_item"
            v-if="showId === item.id"
          >
            <nuxt-link v-for="subcategory in item.subcategories"
            :key="subcategory.id" :to="{ name: 'catalog-slug', params: { slug: subcategory.slug, page: 1 }}">{{ subcategory.title }}</nuxt-link>
          </div>
        </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogOption",
  props: ['catalog'],
  data() {
    return {
      showId: -1,
    }
  },
  methods: {
    handleCategory (id) {
        this.showId = id
    },
    handleLeave () {
      this.showId = -1
    }
  }
}
</script>

<style lang="scss" scoped>
  .catalog_item {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
    left: 100%;
    background: #ffffff;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);

    a {
      padding: 16px;
      display: block;
      color: black;
      font-size: 14px;

      &:hover {
        background: #000000;
        color: #ffffff;
      }
    }
  }
</style>

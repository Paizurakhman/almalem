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
        <div class="option_item" @mouseover="handleCategory(item.id)"
             @mouseleave="handleLeave">
          <p class="catalog_t">{{ item.title }}</p>
          <img src="~/assets/icon/main/black_arrow.svg" alt="">
          <div
            class="catalog_item"
            v-if="showId === item.id"
          >
            <nuxt-link :to="{ name: 'Catalog' }">{{ item.title }}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogOption",
  data: () => ({
    showId: -1,
    catalog: [
      {
        id: 1,
        title: 'Механические устройства'
      },
      {
        id: 2,
        title: 'Гидротехника, гидравлика'
      },
      {
        id: 3,
        title: 'Вычислительная техника'
      },
      {
        id: 4,
        title: 'Механические устройства'
      },
      {
        id: 5,
        title: 'Гидротехника, гидравлика'
      },
      {
        id: 6,
        title: 'Вычислительная техника'
      },
      {
        id: 7,
        title: 'Механические устройства'
      },
      {
        id: 8,
        title: 'Гидротехника, гидравлика'
      },
      {
        id: 9,
        title: 'Вычислительная техника'
      },
      {
        id: 10,
        title: 'Механические устройства'
      },
      {
        id: 11,
        title: 'Гидротехника, гидравлика'
      },
      {
        id: 12,
        title: 'Другие'
      },
    ]
  }),
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

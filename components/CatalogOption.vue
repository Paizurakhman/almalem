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
        <div class="option_item">
          <p>{{ item.title }}</p>
          <img src="~/assets/icon/main/black_arrow.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogOption",
  data: () => ({
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
  })
}
</script>

<style scoped>

</style>

<template>
  <div class="favorites p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="" />
        <nuxt-link to="/favorites">Избранное</nuxt-link>
      </div>
      <div class="p_title">
        <p>Мои избранные товары</p>
      </div>
      <div v-if="favoriteData">
        <div v-if="favoriteData.products.length">
          <div class="table_wrapper">
            <table class="table table-bordered table-responsive">
              <thead>
              <tr>
                <th scope="col"><p style="width: 100px">Картинка</p></th>
                <th scope="col"><p style="width: 200px">Название</p></th>
                <th scope="col"><p style="width: 100px">Наличие</p></th>
                <th scope="col"><p style="width: 100px">Цена за шт.</p></th>
                <th scope="col"><p style="width: 150px">Действие</p></th>
              </tr>
              </thead>
              <tbody>
              <tr height="100px" v-for="favorite in favoriteData.products" :key="favorite.id">
                <th scope="row" width="190px">
                  <div class="table_img" v-if="favorite.images">
                    <img :src="'http://cdn.astudiodigital.ru/' + favorite.images.image" alt="">
                  </div>
                  <div class="table_img" v-else>
                    <img :src="'http://cdn.astudiodigital.ru/' + favorite.product_images[0].image" alt="">
                  </div>
                </th>
                <td width="440px">{{ favorite.title }}</td>
                <td width="190px">В наличии</td>
                <td width="190px">
                  <p class="t_price price">{{ favorite.current_price }}₸ <span v-if="favorite.sale" class="old_price">2400 ₸</span></p>
                </td>
                <td width="190px">
                  <div class="table_action">
                    <img @click="addToCart(favorite.id)" class="basket_table" src="~/assets/icon/main/basket.svg" alt="img">
                    <img class="delete" @click="deleteFavorite(favorite)" src="~/assets/icon/clear.svg" alt="">
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="contacts_form">
            <div class="contacts_action">
              <button class="btn btn_silver">Вперед</button>
            </div>
          </div>
        </div>
        <div v-else>No favorite products</div>
      </div>
      <div v-else>No favorite products</div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  name: "favorites",
  data() {
    return {
      favoriteData: null
    }
  },
  methods: {
    ...mapActions([
      'ADD_TO_CART',
      'CART_ACTION',
      'FAV_LEN_ACTION'
    ]),
    addToCart (id) {
      this.ADD_TO_CART(id)
      this.CART_ACTION()
    },
    deleteFavorite (product) {
      localStorage.setItem('favorite', JSON.stringify({
        products: this.favoriteData.products.filter(val => {
          return val.id !== product.id
        })
      }))
      this.favoriteData = JSON.parse(localStorage.getItem('favorite'))
      this.FAV_LEN_ACTION()
    }
  },
  mounted() {
    let data = JSON.parse(localStorage.getItem('favorite'))
    if (data) {
      this.favoriteData = JSON.parse(localStorage.getItem('favorite'))
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="basket p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="" />
        <nuxt-link to="/brands">Бренды</nuxt-link>
      </div>
      <div class="p_title">
        <p>Корзина</p>
      </div>
      <div class="table_wrapper" v-if="cartData">
        <table class="table table-bordered table-responsive-sm">
          <thead>
            <tr>
              <th scope="col" width="190px">Картинка</th>
              <th scope="col" width="440px">Название</th>
              <th scope="col" width="190px">Количество</th>
              <th scope="col" width="190px">Цена за шт.</th>
              <th scope="col" width="190px">Общая цена</th>
            </tr>
          </thead>
          <tbody>
          <table-row v-for="product in cartData.products" :key="product.id" :product="product" @deleteCartProduct="deleteCartProduct"/>
          </tbody>

        </table>
        <div class="t_action">
          <button class="btn btn_silver">Продолжить покупки</button>
          <nuxt-link :to="{ name: 'cart-checkout' }" class="btn btn_silver">Купить</nuxt-link>
        </div>
      </div>
      <div v-else>No products</div>
    </div>
  </div>
</template>

<script>

import TableRow from "../../components/tableRow";
export default {
  name: "basket",
  components: {TableRow},
  data() {
    return {
      cartData: null,
      cart: null,
    }
  },
  computed: {
    get_cart () {
      if (this.cart.length) {
        this.$axios.$get('card-product', {
          params: {
            lang: this.$store.state.lang,
            product_id: this.cart.map(item => {
              return item.id
            })
          }
        })
          .then(res => {
            this.cartData = res
          })
      }else {
        this.cartData = null
      }
    }
  },
  async mounted() {
    this.cart = JSON.parse(localStorage.getItem('cart'))
    if (this.cart) {
      this.get_cart
    }
  },
  methods: {
    deleteCartProduct (id) {
      this.cart = this.cart.filter(rm => {
          return rm.id !== id
      })
      localStorage.setItem('cart', JSON.stringify(this.cart))

      this.get_cart
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="basket p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="" />
        <nuxt-link to="/cart">Корзина</nuxt-link>
      </div>
      <div class="p_title">
        <p>{{ locale[this.$store.state.lang].contentTitle.cart }}</p>
      </div>
      <div class="table_wrapper" v-if="cartData">
        <table class="table table-bordered table-responsive">
          <thead>
            <tr>
              <th scope="col"><p style="width: 100px">{{ locale[this.$store.state.lang].tableCart.imageText}}</p></th>
              <th scope="col"><p style="width: 200px">{{ locale[this.$store.state.lang].tableCart.name }}</p></th>
              <th scope="col"><p style="width: 120px">{{ locale[this.$store.state.lang].tableCart.amount }}</p></th>
              <th scope="col"><p style="width: 150px">{{ locale[this.$store.state.lang].tableCart.priceByCount }}</p></th>
              <th scope="col"><p style="width: 150px">{{ locale[this.$store.state.lang].tableCart.amountPrice }}</p></th>
            </tr>
          </thead>
          <tbody>
          <table-row
            v-for="(product, index) in cartData.products"
            :key="product.id"
            :product="product"
            :products="cartData.products"
            :index="index"
            @deleteCartProduct="deleteCartProduct"/>
          </tbody>

        </table>
        <div class="t_action">
          <nuxt-link to="/" class="btn btn_silver">{{ locale[this.$store.state.lang].buttons.continue_purchase }}</nuxt-link>
          <nuxt-link :to="{ name: 'cart-checkout' }" class="btn btn_silver">{{ locale[this.$store.state.lang].buttons.buy }}</nuxt-link>
        </div>
      </div>
      <div v-else>Корзина пуста</div>
    </div>
  </div>
</template>

<script>

import {locale} from "../../middleware/localeLang";
import TableRow from "../../components/tableRow";
import { mapActions } from 'vuex'
export default {
  name: "basket",
  components: {TableRow},
  data() {
    return {
      cartData: null,
      cart: null,
      locale: locale
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
    this.LANG_ACTION()
    this.cart = JSON.parse(localStorage.getItem('cart'))
    if (this.cart) {
      this.get_cart
    }
  },
  methods: {
    ...mapActions([
      'CART_ACTION',
      'LANG_ACTION'
    ]),
    deleteCartProduct (id) {
      this.cart = this.cart.filter(rm => {
          return rm.id !== id
      })
      localStorage.setItem('cart', JSON.stringify(this.cart))

      this.get_cart
      this.CART_ACTION()
    }
  }
}
</script>

<style scoped>

</style>

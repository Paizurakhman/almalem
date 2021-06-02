<template>
  <nuxt-link :to="{
    name: 'product-details-slug',
    params: {
      slug: product.slug
    }
  }">
      <div class="product_card">
        <div class="product_title">
          <p>{{ product.title | truncate }} </p>
        </div>
        <div class="card_header overlay">
          <div class="company_name">
            <p>Company</p>
          </div>
          <span>
            <i
              @click.stop.prevent="addFavorite(product)"
              :class="[activeFav? 'fas fa-heart': 'far fa-heart']"
            ></i>
<!--            <img @click.stop.prevent="addFavorite(product)" src="~/assets/icon/black_heart.svg" alt="">-->
          </span>
        </div>
        <div class="main_img">
          <div class="sale" v-if="product.sale">-{{product.sale}}%</div>
          <v-lazy-image
            :src="this.$store.state.imageUrl + product.images.image"

          />
        </div>
        <div class="product_card_bottom">
          <div class="price">
            <p><span class="new_price">{{ product.current_price}} ₸</span> <span v-if="product.sale" class="old_price">{{ product.current_price + (product.current_price * product.sale / 100) }} ₸</span></p>
          </div>
          <div class="inline_img overlay">
            <span v-if="activeCart" :class="{activeCart: activeCart}">
              <img
                @click.stop.prevent="addToCart(product.id)"
                src="~/assets/icon/white_basket.svg"
              >
            </span>
            <span v-else>
              <img
                @click.stop.prevent="addToCart(product.id)"
                src="~/assets/icon/black_basket.svg"
              >
            </span>
          </div>
        </div>
      </div>
  </nuxt-link>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "productCard",
  props: ['product'],
  data() {
    return {
      hasCart: null,
      hasFav: null,
      activeCart: false,
      activeFav: false
    }
  },
  methods: {
    ...mapActions([
      'ADD_TO_CART',
      'ADD_FAVORITE',
      "CART_ACTION",
      'FAV_LEN_ACTION'
    ]),
    addToCart (id) {
      this.ADD_TO_CART(id)
      this.activeCart = !this.activeCart
      this.CART_ACTION()
    },
    addFavorite (product) {
      this.ADD_FAVORITE(product)
      this.FAV_LEN_ACTION()
      this.activeFav = !this.activeFav
    },
    cartId () {
      if (this.hasCart) {
        this.hasCart.filter(val => {
          if (val.id === this.product.id) {
            this.activeCart = true
          }
        })
      }
    },
    favId() {
      if (this.hasFav) {
        this.hasFav.filter(val => {
          if (val.id === this.product.id) {
            this.activeFav = true
          }
        })
      }
    }
  },
  mounted() {
    this.hasCart = JSON.parse(localStorage.getItem('cart')) || null
    this.hasFav = JSON.parse(localStorage.getItem('favorite')).products
    this.cartId()
    this.favId()
  }

}
</script>

<style scoped>

</style>

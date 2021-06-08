<template>
  <nuxt-link :to="{
    name: 'product-details-slug',
    params: {
      slug: product.slug
    }
  }">
    <div class="product_card">
      <div class="row align-items-center position-relative">
        <div class="col-xl-3 col-lg-4">
          <div class="main_img">
            <div class="sale" v-if="product.sale">-{{product.sale}}</div>
            <v-lazy-image :src="this.$store.state.imageUrl + product.images.image" alt="" />
          </div>
        </div>
        <div class="col-xl-9 col-lg-8 position-static">
          <div class="row">
            <div class="col-xl-7">
              <div class="card_title_content">
                <div class="blue_text">
                  {{ product.title }}
                </div>
                <div class="company_name">
                  <p>Company</p>
                </div>
                <div class="card_col_title">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique in quis habitant. Egestas urna, faucibus mauris maecenas condimentum varius ornare diam. Cras quis nunc orci, id gravida sit enim nisi. Augue cursus non nibh posuere a, aliquet sed. </p>
                </div>
              </div>
            </div>
            <div class="col-xl-5 position-static">
              <div class="product_card_left">
                <div class="product_status">
                  <div class="like">
                    <span>
                      <i
                        @click.stop.prevent="addFavorite(product)"
                        :class="[activeFav? 'fas fa-heart': 'far fa-heart']"
                      ></i>
                    </span>
                  </div>
                  <div class="card_col_title">
                    <p>Доступно: <span>98 на складе</span></p>
                  </div>
                  <div class="price">
                    <p><span class="new_price">{{ product.current_price }} ₸</span> <span v-if="product.sale" class="old_price">{{ product.price }}₸</span></p>
                  </div>
                </div>
                <div class="add_to_card">
                  <button v-if="!inCart" class="btn btn_main" @click.stop.prevent="addToCart(product.id)">{{ locale[this.$store.state.lang].buttons.add_toCart }}</button>
                  <button @click.stop.prevent="" v-if="inCart" class="btn btn_main">{{ locale[this.$store.state.lang].buttons.inCart }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import {locale} from "../middleware/localeLang";
import {mapActions} from "vuex";
export default {
  name: "productColCard",
  props: ['product'],
  data() {
    return {
      locale: locale,
      hasFav: null,
      activeFav: false,
      inCart: false
    }
  },
  methods: {
    ...mapActions([
      'IN_CART_ACTION',
      'ADD_FAVORITE',
      'CART_ACTION',
      'FAV_LEN_ACTION'
    ]),
    addToCart (id) {
      this.IN_CART_ACTION({id: id, count: 1})
      this.CART_ACTION()
      this.inCart = true
    },
    addFavorite (product) {
      this.ADD_FAVORITE(product)
      this.FAV_LEN_ACTION()
      this.activeFav = !this.activeFav
    },
    favId() {
      if (this.hasFav) {
        this.hasFav.filter(val => {
          if (val.id === this.product.id) {
            this.activeFav = true
          }
        })
      }
    },
    cartId () {
      if (this.hasCart) {
        this.hasCart.filter(val => {
          if (val.id === this.product.id) {
            this.inCart = true
          }
        })
      }
    },
  },
  mounted() {
    this.hasFav = JSON.parse(localStorage.getItem('favorite'))?.products
    this.hasCart = JSON.parse(localStorage.getItem('cart')) || null

    this.favId()
    this.cartId()
  }
}
</script>

<style scoped>

</style>

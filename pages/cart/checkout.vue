<template>
    <div class="checkout p_page">
        <div class="container">
            <div class="page_links">
                <nuxt-link to="/">Главная</nuxt-link>
                <img src="~/assets/icon/arrow_silver.svg" alt="" />
                <nuxt-link to="/cart">Корзина</nuxt-link>
                <img src="~/assets/icon/arrow_silver.svg" alt="" />
                <nuxt-link to="checkout">Оформление заказа</nuxt-link>
            </div>
            <div class="p_title">
                <p>Оформление заказа</p>
            </div>

            <div class="checkout_content">
                <div class="contacts_form">
                    <div class="form">
                        <form @submit.prevent="handleBuy">
                            <div class="inputs">
                                <div class="row">
                                    <div class="col-xl-7">
                                        <div class="input_title">
                                            <p>Контактные данные</p>
                                        </div>
                                        <div class="row">
                                                <div class="col-xl-4">
                                                    <input type="text" placeholder="Имя и фамилия" v-model="main_info.name">
                                                </div>
                                                <div class="col-xl-4">
                                                    <the-mask :mask="['+7(###) ###-####']" placeholder="Номер телефона" v-model="main_info.phone"/>
                                                </div>
                                                <div class="col-xl-4">
                                                    <input type="email" placeholder="E-mail" v-model="main_info.email">
                                                </div>
                                            </div>
                                        <div class="input_title">
                                            <p>Доставка</p>
                                        </div>
                                        <div class="i_title">
                                            <p>Адрес</p>
                                        </div>
                                        <div class="row" v-if="regions">
                                            <div class="col-xl-4">
                                              <select v-model="selectedItem" @change="selected(selectedItem)">
                                                <option :value="reg" v-for="reg in regions" :key="reg.id">{{ reg.title }}</option>
                                              </select>
<!--                                                <vue-picker v-model="selectedItem" @input="selected(selectedItem)" autofocus placeholder="Регион">-->
<!--                                                    <vue-picker-option :value="reg" v-for="reg in regions" :key="reg.id">{{reg.title}}</vue-picker-option>-->
<!--                                                </vue-picker>-->
                                            </div>
                                            <div class="col-xl-4" v-if="" >
<!--                                              <select v-model="address.city" >-->
<!--                                                <option :value="city.title" v-for="city in selectedItem.cities" :key="city.id">{{ city.title }}</option>-->
<!--                                              </select>-->
<!--                                                <vue-picker v-if="selectedItem" v-model="address.city" autofocus placeholder="Город" :disabled="address.region">-->
<!--                                                    <vue-picker-option :value="city.title" v-for="city in selectedItem.cities" :key="city.id">{{ city.title }}</vue-picker-option>-->
<!--                                                </vue-picker>-->
<!--                                                <vue-picker v-else placeholder="Город" :disabled="address.region">-->
<!--                                              </vue-picker>-->
                                            </div>
                                            <div class="col-xl-4">
                                                <input type="text" placeholder="Улица" v-model="address.street">                                                </div>
                                        </div>
                                        <div class="row">
                                            <div class="home_address">
                                                <input type="text" placeholder="Дом" v-model="address.house">
                                                <input type="text" placeholder="Корпус" v-model="address.building">
                                                <input type="text" placeholder="Подъезд" v-model="address.entrance">
                                                <input type="text" placeholder="Этаж" v-model="address.floor">
                                                <input type="text" placeholder="Квартира" v-model="address.apartment">
                                            </div>
                                        </div>
                                        <div class="i_title">
                                            <p>Комментарии к заказу</p>
                                        </div>
                                        <textarea placeholder="Комментарии" v-model="main_info.comment"></textarea>
                                    </div>
                                    <div class="col-xl-5">
                                        <div class="input_title">
                                            <p>Ваш заказ</p>
                                        </div>
                                        <div class="address_card" v-if="cartData">
                                            <div class="ordering_card" v-for="product in cartData.products" :key="product.id">
                                                <div class="row">
                                                    <div class="col-xl-3">
                                                        <img :src="'http://cdn.astudiodigital.ru/' + product.images.image" alt="">
                                                    </div>
                                                    <div class="col-xl-5">
                                                        <p>{{ product.title }}</p>
                                                    </div>
                                                    <div class="col-xl-2">
                                                        <div class="item_amount">
                                                            <p class="count">1 шт</p>
                                                        <p class="price">{{product.price}}₸</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-2">
                                                        <div class="table_wrapper">
                                                            <div class="table_action">
                                                                <img @click="deleteCartProduct(product.id)" class="delete" src="~/assets/icon/clear.svg" alt="">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card_footer">
                                            <div class="sum">
                                                <p>Итого: <span class="b_text">1400 ₸</span></p>
                                            </div>
                                            <div class="action">
                                                <button class="btn btn_main">Перейти к оплате</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'checkout',
  data() {
    return {
      cartData: null,
      cart: null,
      regions: null,
      selectedItem: null,
      main_info: {
        name: '',
        phone: '',
        email: '',
        comment: '',
        token: null
      },
      address: {
        region: '',
        city: '',
        street: '',
        house: '',
        building: '',
        entrance: '',
        floor: '',
        apartment: ''
      }
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
    await this.$axios.$get('order-address?lang=' + this.$store.state.lang)
    .then(res => {
      this.regions = res.regions
    })
  },
  methods: {
    ...mapActions([
      'CART_ACTION'
    ]),

    selected(item) {
      this.address.region = item.title
    },

    deleteCartProduct (id) {
      this.cart = this.cart.filter(rm => {
        return rm.id !== id
      })
      localStorage.setItem('cart', JSON.stringify(this.cart))

      this.get_cart
      this.CART_ACTION()
    },
    async handleBuy() {
      this.main_info.token = localStorage.getItem('token')
      await this.$axios.$post('get-order', {
        main_info: this.main_info,
        products: this.cart,
        address: this.address
      })
      .then(res => {
        // window.location.href = res.url
        window.open(res.url, '_self')
      })
    },
  }
}
</script>

<style lang="scss">
  select {
    width: 100%;
    padding: 10px 4px;
    border-radius: 5px;
    background: transparent;
    outline: transparent;
    border: 1px solid #757575;
  }
</style>

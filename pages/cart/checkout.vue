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
        <p>{{ locale[this.$store.state.lang].contentTitle.checkoutText }}</p>
      </div>
      <div class="checkout_content" v-if="regions">
        <div class="contacts_form">
          <div class="form">
            <form @submit.prevent="handleBuy">
              <div class="inputs">
                <div class="row">
                  <div class="col-xl-7 col-lg-7">
                    <div class="input_title">
                      <p>
                        {{
                          locale[this.$store.state.lang].contentTitle
                            .contactDates
                        }}
                      </p>
                    </div>
                    <div class="row">
                      <div class="col-xl-4 col-md-4">
                        <input
                          class="custom_input"
                          type="text"
                          :placeholder="
                            locale[this.$store.state.lang].form.nameAndSurname
                          "
                          v-model="main_info.name"
                        />
                      </div>
                      <div class="col-xl-4 col-md-4">
                        <the-mask
                          class="custom_input"
                          :masked="true"
                          :mask="['+7(###) ###-####']"
                          :placeholder="
                            locale[this.$store.state.lang].form.phoneNumber
                          "
                          v-model="main_info.phone"
                        />
                      </div>
                      <div class="col-xl-4 col-md-4">
                        <input
                          class="custom_input"
                          type="email"
                          placeholder="E-mail"
                          v-model="main_info.email"
                        />
                      </div>
                    </div>
                    <div class="input_title">
                      <p>
                        {{
                          locale[this.$store.state.lang].contentTitle
                            .deliveryAddress
                        }}
                      </p>
                    </div>
                    <div class="i_title">
                      <p>
                        {{
                          locale[this.$store.state.lang].contentTitle
                            .addressText
                        }}
                      </p>
                    </div>
                    <div class="row" v-if="regions">
                      <div class="col-xl-4 col-md-4">
                        <input v-model="address.region" class="custom_input" type="text" :placeholder="locale[this.$store.state.lang].address.region">
                      </div>
                      <div class="col-xl-4 col-md-4">
                        <input v-model="address.city" class="custom_input" type="text" :placeholder="locale[this.$store.state.lang].address.city">
                      </div>
                      <div class="col-xl-4 col-md-4">
                        <input
                          class="custom_input"
                          type="text"
                          :placeholder="
                            locale[this.$store.state.lang].address.street
                          "
                          v-model="address.street"
                        />
                      </div>
                    </div>
                    <div class="home_address">
                      <input
                        class="custom_input"
                        type="text"
                        :placeholder="
                          locale[this.$store.state.lang].address.house
                        "
                        v-model="address.house"
                      />
                      <input
                        class="custom_input"
                        type="text"
                        :placeholder="
                          locale[this.$store.state.lang].address.corps
                        "
                        v-model="address.building"
                      />
                      <input
                        class="custom_input"
                        type="text"
                        :placeholder="
                          locale[this.$store.state.lang].address.entrance
                        "
                        v-model="address.entrance"
                      />
                      <input
                        class="custom_input"
                        type="text"
                        :placeholder="
                          locale[this.$store.state.lang].address.floor
                        "
                        v-model="address.floor"
                      />
                      <input
                        class="custom_input"
                        type="text"
                        :placeholder="
                          locale[this.$store.state.lang].address.apartment
                        "
                        v-model="address.apartment"
                      />
                    </div>
                    <div class="i_title">
                      <p>
                        {{locale[this.$store.state.lang].contentTitle.commentText }}
                      </p>
                    </div>
                    <textarea
                      :placeholder="
                        locale[this.$store.state.lang].contentTitle.comments
                      "
                      v-model="main_info.comment"
                    ></textarea>
                  </div>
                  <div class="col-xl-5 col-lg-5">
                    <div class="input_title">
                      <p>{{ locale[this.$store.state.lang].contentTitle.yourOrder }}
                      </p>
                    </div>
                    <div class="address_card" v-if="cartData">
                      <div
                        class="ordering_card"
                        v-for="product in cartData.products"
                        :key="product.id"
                      >
                        <div class="row">
                          <div class="col-xl-3 col-3 position-static">
                            <img
                              class="order"
                              :src="
                                'http://cdn.test-vip.kz/' +
                                product.images.image
                              "
                              alt=""
                            />
                          </div>
                          <div class="col-xl-5 col-8 position-static">
                            <p class="card_text">{{ product.title }}</p>
                          </div>
                          <div class="col-xl-2 col-12 position-static">
                            <div class="item_amount">
                              <p class="count">
                                {{ product.count }}
                                {{ locale[GET_LANG].contentTitle.amount }}
                              </p>
                              <p class="price">{{ product.price }}₸</p>
                            </div>
                          </div>
                          <div class="col-xl-2 col-2 position-static">
                            <div class="table_wrapper">
                              <div class="table_action">
                                <img
                                  @click="deleteCartProduct(product.id)"
                                  class="delete"
                                  src="~/assets/icon/clear.svg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card_footer" v-if="cartData">
                      <div class="sum">
                        <p>
                          {{
                            locale[this.$store.state.lang].contentTitle
                              .amountText
                          }}: <span class="b_text">{{ totalPrice }} ₸</span>
                        </p>
                      </div>
                      <div class="action">
                        <button class="btn btn_main">
                          {{ locale[this.$store.state.lang].buttons.pay }}
                        </button>
                      </div>
                    </div>
                    <div v-else>
                      <h3>
                        {{
                          locale[this.$store.state.lang].contentTitle.cartEmpty
                        }}
                      </h3>
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
import { locale } from "../../middleware/localeLang";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "checkout",
  data() {
    return {
      cartData: null,
      locale: locale,
      cart: null,
      regions: null,
      cities: null,
      main_info: {
        name: "",
        phone: "",
        email: "",
        comment: "",
        token: null,
      },
      address: {
        region: "",
        city: "",
        street: "",
        house: "",
        building: "",
        entrance: "",
        floor: "",
        apartment: "",
      },
    };
  },
  computed: {
    ...mapGetters(["GET_LANG"]),
    get_cart() {
      if (this.cart.length) {
        this.$axios
          .$get("card-product", {
            params: {
              lang: this.$store.state.lang,
              product_id: this.cart.map((item) => {
                return item.id;
              }),
            },
          })
          .then((res) => {
            this.cartData = res;
            this.cart.filter((item, index) => {
              this.cartData.products.forEach((element, index) => {
                if (item.id === element.id) {
                  this.$set(
                    this.cartData.products[index],
                    "count",
                    Number(item.count)
                  );
                }
              });
            });
          });
      } else {
        this.cartData = null;
      }
    },
    totalPrice() {
      let result = [];
      if (this.cartData) {
        this.cartData.products.filter((item, i) => {
          for (let i of JSON.parse(localStorage.getItem("cart"))) {
            if (item.id === i.id) {
              result.push(item.price * item.count);
            }
          }
        });
      }
      if (result.length) {
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
      }
      return result;
    },
  },
  async mounted() {
    this.cart = JSON.parse(localStorage.getItem("cart"));
    if (this.cart) {
      this.get_cart;
    }
    await this.$axios
      .$get("get-region?lang=" + this.$store.state.lang)
      .then((res) => {
        this.regions = res.regions;
      });
    if (localStorage.getItem("token")) {
      await this.$axios
        .$post("user-profile?token=" + localStorage.getItem("token"))
        .then((res) => {
          this.main_info.name = res.user.name;
          this.main_info.phone = res.user.phone;
          this.main_info.email = res.user.email;
          this.address.region = res.user.region;
          this.address.city = res.user.city
          this.address.street= res.user.street
          this.address.house = res.user.house
          this.address.building = res.user.building
          this.address.entrance = res.user.entrance
          this.address.floor = res.user.floor
          this.address.apartment = res.user.apartment
        });
    }
  },
  methods: {
    ...mapActions(["CART_ACTION"]),
    deleteCartProduct(id) {
      this.cart = this.cart.filter((rm) => {
        return rm.id !== id;
      });
      localStorage.setItem("cart", JSON.stringify(this.cart));
      this.get_cart;
      this.CART_ACTION();
    },
    async handleBuy() {
      this.main_info.token = localStorage.getItem("token");
      await this.$axios
        .$post("get-order", {
          main_info: this.main_info,
          products: this.cart,
          address: this.address,
        })
        .then((res) => {
          window.open(res.url, "_self");
        });
    },
  },
};
</script>

<style lang="scss">
.checkout_content {
  .vs__selected {
    white-space: nowrap;
    width: 135px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>

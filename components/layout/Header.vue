<template>
  <header v-if="headerData">
    <div class="header">
      <div class="container m_none">
        <div class="header_top">
          <div class="social_networks">
            <span><a :href="headerData.contacts.facebook" target="_blank"><img src="~/assets/icon/socials/facebook.svg" alt="social"></a></span>
            <span><a :href="headerData.contacts.instagram" target="_blank"><img src="~/assets/icon/socials/instagram.svg" alt="social"></a></span>
            <span><a :href="headerData.contacts.youtube" target="_blank"><img src="~/assets/icon/socials/youtube.svg" alt="social"></a></span>
            <span><a :href="headerData.contacts.vk" target="_blank"><img src="~/assets/icon/socials/vk.svg" alt="social"></a></span>
            <span><a :href="headerData.contacts.odnoklassniki" target="_blank"><img src="~/assets/icon/socials/odnoklassniki.svg" alt="social"></a></span>
          </div>
          <div class="contact">
            <div class="city">
              <select name="city" v-model="city">
                <option v-for="c in headerData.cities" :key="c.id" :value="c.id">{{ c.title}}</option>
              </select>
            </div>
            <div class="phone">
              <span><a :href="'tel:' +headerData.contacts.phone_number">{{headerData.contacts.phone_number}}</a></span>
            </div>
          </div>
          <div class="top_actions">
            <div class="my_account">
              <nuxt-link to="/auth/profile" v-if="token">
                <img src="~/assets/icon/main/user.svg" alt=""
                ><span> Мой аккаунт</span></nuxt-link>
              <div class="auth_action" v-if="!token">
                <nuxt-link to="/auth/login">Войти</nuxt-link> /
                <nuxt-link to="/auth/register">Регистрация</nuxt-link>
              </div>
            </div>
            <div class="language">
              <div
                class="lang"
                ref="language"
                @click.stop="handleLanguage"
              >
                <img :src="currentLanguage.src" alt="">
                <span>{{currentLanguage.type}}</span>
                <img src="~/assets/icon/main/arrow.svg" alt="">
              </div>
              <layout-language-nav @changeLang="changeLanguage" v-if="getLanguage" :language="lang" />
            </div>
          </div>
        </div>
        <div class="header_center">
          <nuxt-link to="/">
            <div class="logo">
              <img src="~/assets/logo.svg" alt="">
            </div>
          </nuxt-link>
          <layout-search />
          <div class="center_actions">
            <nuxt-link :to="{ name: 'favorites'}">
              <div class="like">
                  <img src="~/assets/icon/main/heart.svg" alt="">
                  <p>Избранное</p>
                  <div class="fav_length" v-if="GET_FAV_LEN">{{ GET_FAV_LEN }}</div>
              </div>
            </nuxt-link>
            <nuxt-link :to="{ name: 'cart'}">
              <div class="basket">
                  <img src="~/assets/icon/main/basket.svg" alt="">
                  <p>Корзина</p>
                  <div class="cart_length" v-if="getCartLen">{{ getCartLen }}</div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="d_none mobile_top">
          <div class="mobile_header">
            <div class="mobile_header_top">
              <div class="social_networks">
                <span><a :href="headerData.contacts.facebook" target="_blank"><img src="~/assets/icon/socials/facebook.svg" alt="social"></a></span>
                <span><a :href="headerData.contacts.instagram" target="_blank"><img src="~/assets/icon/socials/instagram.svg" alt="social"></a></span>
                <span><a :href="headerData.contacts.youtube" target="_blank"><img src="~/assets/icon/socials/youtube.svg" alt="social"></a></span>
                <span><a :href="headerData.contacts.vk" target="_blank"><img src="~/assets/icon/socials/vk.svg" alt="social"></a></span>
                <span><a :href="headerData.contacts.odnoklassniki" target="_blank"><img src="~/assets/icon/socials/odnoklassniki.svg" alt="social"></a></span>
              </div>
              <div class="top_actions">
                <div class="my_account" v-if="token">
                  <nuxt-link to="/auth/profile">
                    <img src="~/assets/icon/main/user.svg" alt=""></nuxt-link>
                  <img src="~/assets/icon/main/arrow.svg" alt="">
                </div>
                <div class="my_account" v-else>
                  <nuxt-link to="/auth/login">Войти</nuxt-link> <span> /</span>
                  <nuxt-link to="/auth/register">Регистрация</nuxt-link>
                </div>
                <div class="language">
                  <div
                    class="lang"
                    @click.stop="handleLanguage"
                    ref="language"
                  >
                    <img :src="currentLanguage.src" alt="">
                    <img src="~/assets/icon/main/arrow.svg" alt="">
                  </div>
                  <layout-language-nav @changeLang="changeLanguage" v-if="getLanguage" :language="lang"/>
                </div>
              </div>
            </div>
            <div class="mobile_header_center">
              <div class="contact">
                <div class="city">
                  <select name="city" v-model="city">
                    <option v-for="c in headerData.cities" :key="c.id" :value="c.id">{{ c.title}}</option>
                  </select>
                </div>
                <div class="phone">
                  <span>{{ headerData.contacts.phone_number }}</span>
                </div>
              </div>
            </div>
            <div class="mobile_navbar">
                <div class="col_6 w_mob_logo">
                  <div class="burger">
                    <img @click="mobileNavAction" src="~/assets/icon/burger_icon.svg" alt="">
                  </div>
                  <div class="logo">
                    <img src="~/assets/logo.svg" alt="">
                  </div>
                </div>
                <div class="col_6 w_mob">
                    <div class="mobile_icon">
                      <img src="~/assets/icon/search.svg" alt="" @click="isSearch">
                    </div>
                    <div class="mobile_icon heart">
                      <nuxt-link :to="{ name: 'favorites'}">
                        <img src="~/assets/icon/main/heart.svg" alt="">
                        <div class="fav_length" v-if="GET_FAV_LEN">{{ GET_FAV_LEN }}</div>
                      </nuxt-link>
                    </div>
                    <div class="mobile_icon cart">
                      <nuxt-link :to="{name: 'cart'}">
                        <img src="~/assets/icon/main/basket.svg" alt="">
                        <div class="cart_length" v-if="getCartLen">{{ getCartLen }}</div>
                      </nuxt-link>
                    </div>
                </div>
              <div class="bg" v-if="searchWrapper" @click.self="isSearch"></div>
              <div class="mobile_search_wrapper" v-if="searchWrapper">
                <div class="header_center">
                  <layout-search @empty="isSearch"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="mob_nav">
      <layout-mobile-nav v-if="mobileNav"/>
    </transition>
    <nav class="m_none">
      <div class="container">
        <div class="links">
          <ul>
            <li>
              <nuxt-link to="/">ГЛАВНАЯ</nuxt-link>
            </li>
            <li>
              <div class="drop_down" @click="showAction">
                <span>КАТАЛОГ ТОВАРОВ</span>
                <img :class="{ active_dropdown: showNav}" src="~/assets/icon/main/black_arrow.svg" alt="">
              </div>
            </li>
            <li>
              <nuxt-link to="/oplata-i-dostavka">ОПЛАТА И ДОСТАВКА</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/new-products">НОВИНКИ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/discounts">СКИДКИ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/brands">БРЕНДЫ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">О КОМПАНИИ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contacts">КОНТАКТЫ</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="nav_category">
      <transition name="category">
        <layout-category-nav v-if="showNav" :categories = "headerData.categories"/>
      </transition>
    </div>
  </header>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'
export default {
  name: "Header",
  props: ['lang'],
  data() {
    return {
      headerData: null,
      currentLang: this.lang[0],
      getLanguage: false,
      city: null,
      token: null,
      searchWrapper: false,
      mobileNav: false,

    }
  },
  watch: {
    $route(to, from) {
      this.token = localStorage.getItem('token')
      this.mobileNav = false

      if (this.$cookies.get("token_time") !== null) {
        let date = new Date() - new Date(this.$cookies.get("token_time"));
        let minute = date / 60000;
        if (minute > 25) {
          this.$axios
            .post('refresh', {
              token: $cookies.get("userToken")
            })
            .then((response) => {
              const userToken = response.data.token;
              $cookies.set("userToken", userToken, 18000);
              $cookies.set("token_time", new Date(), 18000);
            })
            .catch((error) => {
              console.log(error);
            });
        }else{
          // this.$router.push("/auth/profile");
        }
      }
    }
  },

  methods: {
    ...mapActions([
      'showAction',
      'CART_ACTION',
      'FAV_LEN_ACTION'
    ]),
    mobileNavAction () {
      this.mobileNav = !this.mobileNav
    },
    changeLanguage (value) {
      this.currentLang = value
      this.getLanguage = false
    },
    handleLanguage () {
      this.getLanguage = !this.getLanguage
    },
    isSearch () {
      this.searchWrapper = !this.searchWrapper
    }
  },
  computed: {
    ...mapState([
      'showNav'
    ]),
    ...mapGetters([
      'getCartLen',
      'GET_FAV_LEN',
      'getMobileNav'
    ]),
    currentLanguage() {
      return this.currentLang
    },
  },
  updated() {
    if (this.mobileNav) {
      document.body.style.overflowY = 'hidden'
      console.log('hidden')
    }
    else  {
      document.body.style.overflowY = 'auto'
    }
  },
  mounted() {
    this.CART_ACTION()
    this.FAV_LEN_ACTION()
    this.token = localStorage.getItem('token')
    this.$axios.get('get-header?lang=' + this.$store.state.lang)
    .then(res => {
      this.headerData = res.data;

      this.city = res.data.cities[0].id
    })

    let vm = this

    document.addEventListener('click', function (e){
      const c = new hideAction(vm.$refs['language'], e.target)
      vm.getLanguage = c.lan
    })
  }
}

class hideAction {
  constructor(ref, target) {
    this.val = true
    if (target !== ref) {
      this.val = false
    }
  }
  get lan() {
    return this.val
  }
}
</script>

<style>

</style>

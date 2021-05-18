<template>
  <header>
    <div class="header">
      <div class="container m_none">
        <div class="header_top">
          <div class="social_networks">
            <span><img src="~/assets/icon/socials/facebook.svg" alt="social"></span>
            <span><img src="~/assets/icon/socials/instagram.svg" alt="social"></span>
            <span><img src="~/assets/icon/socials/youtube.svg" alt="social"></span>
            <span><img src="~/assets/icon/socials/vk.svg" alt="social"></span>
            <span><img src="~/assets/icon/socials/odnoklassniki.svg" alt="social"></span>
          </div>
          <div class="contact">
            <div class="city">
              <span>Алматы</span>
              <img src="~/assets/icon/main/arrow.svg" alt="">
            </div>
            <div class="phone">
              <span>+7(777)777-77-77</span>
            </div>
          </div>
          <div class="top_actions">
            <div class="my_account">
              <nuxt-link to="/auth/profile">
                <img src="~/assets/icon/main/user.svg" alt=""
                ><span> Мой аккаунт</span></nuxt-link>
<!--              <div class="auth_action">-->
<!--                <nuxt-link to="/auth/login">Войти</nuxt-link> /-->
<!--                <nuxt-link to="/auth/register">Регистрация</nuxt-link>-->
<!--              </div>-->
            </div>
            <div class="language">
              <div
                class="lang"
                ref="language"
                @click="handleLanguage"
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
          <div class="logo">
            <img src="~/assets/logo.svg" alt="" @click="createCookies">
          </div>
          <div class="search">
            <input type="text" placeholder="Поиск по товарам">
            <button>
              <span><img src="~/assets/icon/main/search.svg" alt=""></span>
            </button>
          </div>
          <div class="center_actions">
            <nuxt-link :to="{ name: 'favorites'}">
              <div class="like">
                  <img src="~/assets/icon/main/heart.svg" alt="">
                  <p>Избранное</p>
              </div>
            </nuxt-link>
            <nuxt-link :to="{ name: 'cart'}">
              <div class="basket">
                  <img src="~/assets/icon/main/basket.svg" alt="">
                  <p>Корзина</p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="d_none">
          <div class="mobile_header">
            <div class="mobile_header_top">
              <div class="social_networks">
                <span><img src="~/assets/icon/socials/facebook.svg" alt="social"></span>
                <span><img src="~/assets/icon/socials/instagram.svg" alt="social"></span>
                <span><img src="~/assets/icon/socials/youtube.svg" alt="social"></span>
                <span><img src="~/assets/icon/socials/vk.svg" alt="social"></span>
                <span><img src="~/assets/icon/socials/odnoklassniki.svg" alt="social"></span>
              </div>
              <div class="top_actions">
                <div class="my_account">
                  <nuxt-link to="/auth/profile">
                    <img src="~/assets/icon/main/user.svg" alt=""></nuxt-link>
                  <img src="~/assets/icon/main/arrow.svg" alt="">

                  <!--              <div class="auth_action">-->
                  <!--                <nuxt-link to="/auth/login">Войти</nuxt-link> /-->
                  <!--                <nuxt-link to="/auth/register">Регистрация</nuxt-link>-->
                  <!--              </div>-->
                </div>
                <div class="language">
                  <div
                    class="lang"
                    ref="language"
                    @click="handleLanguage"
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
                  <span>Алматы</span>
                  <img src="~/assets/icon/main/arrow.svg" alt="">
                </div>
                <div class="phone">
                  <span>+7(777)777-77-77</span>
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
                      <img src="~/assets/icon/search.svg" alt="">
                    </div>
                    <div class="mobile_icon">
                      <nuxt-link :to="{ name: 'favorites'}">
                        <img src="~/assets/icon/main/heart.svg" alt="">
                      </nuxt-link>
                    </div>
                    <div class="mobile_icon">
                      <nuxt-link :to="{name: 'cart'}">
                        <img src="~/assets/icon/main/basket.svg" alt="">
                      </nuxt-link>
                    </div>
                </div>
            </div>
          </div>
          <transition name="mob_nav">
            <layout-mobile-nav v-if="getMobileNav"/>
          </transition>
        </div>
      </div>
    </div>

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
        <layout-category-nav v-if="showNav" />
      </transition>
    </div>
  </header>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'
import login from "@/pages/auth/login";
export default {
  name: "Header",
  props: ['lang'],
  data() {
    return {
      currentLang: this.lang[0],
      getLanguage: false
    }
  },
  watch: {
    $route(to, from) {

    }
  },
  methods: {
    ...mapActions([
      'showAction',
      'mobileNavAction'
    ]),
    changeLanguage (value) {
      this.currentLang = value
      this.getLanguage = false
    },
    createCookies() {
      this.$cookies.set('token', 'XAfifmckmaciife8dw6ef896w8fw', 360)
      this.$cookies.set('token_time', new Date(), 360)
    },
    handleLanguage () {
      this.getLanguage = !this.getLanguage
    }
  },
  computed: {
    ...mapState([
      'showNav'
    ]),
    ...mapGetters([
      'getMobileNav'
    ]),
    currentLanguage() {
      return this.currentLang
    }
  },
  updated() {
    if (this.getMobileNav) {
      document.body.style.overflowY = 'hidden'
    }
    else  {
      document.body.style.overflowY = 'auto'
    }
  },
  mounted() {
    let vm = this

    // document.addEventListener('click', function (e){
    //   console.log(e.target)
    //   console.log(vm.$refs['language'])
    //   console.log(vm.getLanguage)
    //   if (e.target !== vm.$refs['language']){
    //     vm.getLanguage = false
    //   }
    //   else {
    //     vm.getLanguage = true
    //   }
    // })
  }
}
</script>

<style>

</style>

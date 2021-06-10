<template>
  <footer v-if="footerData">
    <div class="container">
      <div class="footer">
        <div class="row">
          <div class="col-xl-5 col-lg-4 order_2">
            <div class="logo">
              <img src="~/assets/icon/main/logo_footer.svg" alt="">
            </div>
            <div class="footer_title">
              <p>{{ footerData.footer}}</p>
            </div>
            <div class="address">
              <div class="footer_info">
                <p><span class="bolder_text">{{ locale[this.$store.state.lang].footer.addressText}}</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="help">
              <div class="footer_info">
                <p><span class="bolder_text">{{ locale[this.$store.state.lang].footer.helpText}}</span><a :href="'tel:' + footerData.phone_number">{{footerData.phone_number}}</a></p>
              </div>
            </div>
          </div>
          <div class="col-xl-7 col-lg-8 order_1">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-3">
                <div class="information">
                  <div class="footer_info">
                    <p class="bolder_text mb-4">{{ locale[this.$store.state.lang].footer.information}}</p>
                  </div>
                  <div class="footer_links">
                    <ul>
                      <li>
                        <nuxt-link to="/about">{{ locale[this.$store.state.lang].footer.about}}</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/oplata-i-dostavka">{{ locale[this.$store.state.lang].footer.oplata}}</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/contacts">{{ locale[this.$store.state.lang].footer.contacts}}</nuxt-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-3">
                <div class="information">
                  <div class="footer_info">
                    <p class="bolder_text mb-4">{{ locale[this.$store.state.lang].footer.extra}}</p>
                  </div>
                  <div class="footer_links">
                    <ul>
                      <li>
                        <nuxt-link to="/catalog">{{ locale[this.$store.state.lang].footer.catalog}}</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/brands">{{ locale[this.$store.state.lang].footer.brands}}</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/new-products">{{ locale[this.$store.state.lang].footer.news}}</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/discounts">{{ locale[this.$store.state.lang].footer.sale}}</nuxt-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-7 col-lg-6 col-md-6">
                <div class="account" v-if="token">
                  <div class="footer_info">
                    <p class="bolder_text mb-4">{{ locale[this.$store.state.lang].header.myAccount}}</p>
                  </div>
                  <div class="footer_text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <nuxt-link v-ripple.mouseover.900 :to="{ name: 'auth-profile'}" class="btn btn_main">{{ locale[this.$store.state.lang].buttons.view}}</nuxt-link>
                </div>
                <div class="account" v-else>
                  <div class="footer_info">
                    <p class="bolder_text mb-4">{{ locale[this.$store.state.lang].header.registerText}}</p>
                  </div>
                  <div class="footer_text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <nuxt-link v-ripple.mouseover.900 :to="{ name: 'auth-register'}" class="btn btn_main">{{ locale[this.$store.state.lang].buttons.start }}</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copy_right">
        <p>Copyright Almalem © 2021 {{ locale[this.$store.state.lang].footer.copyrightText}} Studio Nomad</p>
      </div>
    </div>
  </footer>
</template>

<script>
import {locale} from "../../middleware/localeLang";

export default {
  name: "Footer",
  data() {
    return {
      locale: locale,
      footerData: null,
      token: null
    }
  },
  mounted() {
    this.token = localStorage.getItem('token')
    this.$axios.get('get-footer?lang=' + this.$store.state.lang)
    .then(res => {
      this.footerData = res.data.contacts
    })
  },
  watch: {
    $route(to, from) {
      this.token = localStorage.getItem('token')
    }
  },
}
</script>

<style scoped lang="scss">
  .account {
    a {
      display: block;
      width: 70%;
    }
  }
</style>

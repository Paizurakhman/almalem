<template>
  <div class="login p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/auth/login">Логин</nuxt-link>
      </div>
      <div class="login_content">
        <div class="row">
          <div class="col-xl-6 col-lg-6 m_b">
            <div class="address_card">
              <div class="card_title">
                <p>{{ locale[this.$store.state.lang].contentTitle.newClient }}</p>
              </div>
              <div class="c_title">
                <p class="b_text">{{ locale[this.$store.state.lang].header.registerText }}</p>
                <p class="silver_text">Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Ut felis magna tristique non ipsum donec.
                  Proin aenean sed placerat ut.</p>
              </div>
              <nuxt-link :to="{name: 'auth-register'}" class="btn btn_silver">{{ locale[this.$store.state.lang].buttons.continue }}</nuxt-link>
            </div>
          </div>

          <div class="col-xl-6 col-lg-6">
            <form @submit.prevent="handleLogin">
              <div class="address_card">
                <div class="card_title">
                  <p>{{ locale[this.$store.state.lang].contentTitle.hasAnAccount }}</p>
                </div>
                <div class="c_title">
                  <p class="b_text">{{ locale[this.$store.state.lang].header.loginText }}</p>
                  <div class="contacts_form">

                    <div class="form">
                      <form>
                        <div class="inputs">
                          <span>E-mail</span>
                          <input class="custom_input" type="email" v-model="email" :class="{invalid:($v.email.$dirty && !$v.email.required)
                          || ($v.email.$dirty && !$v.email.email)}">
                          <span class="error" v-if="$v.email.$dirty && !$v.email.email">{{locale[this.$store.state.lang].errors.emailField }}</span>
                          <span class="error" v-if="$v.email.$dirty && !$v.email.required">{{locale[this.$store.state.lang].errors.requiredField }}</span>
                        </div>
                        <div class="inputs">
                          <span>{{ locale[this.$store.state.lang].contentTitle.passwordText }}</span>
                          <input class="custom_input" type="password" v-model.trim="password" :class="{invalid:($v.password.$dirty && !$v.password.required)
                          || ($v.password.$dirty && !$v.password.minLength)}">
                          <span class="error" v-if="$v.password.$dirty && !$v.password.required">{{locale[this.$store.state.lang].errors.requiredField }}</span>
                          <span class="error" v-if="$v.password.$dirty && !$v.password.minLength">{{locale[this.$store.state.lang].errors.passwordLength }}</span>
                        </div>
                        <p class="error" v-if="error">{{ error }}</p>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="action_auth">
                  <div class="row align-items-center">
                    <div class="col-xl-6 col-lg-6 o_2">
                      <button class="btn btn_silver">{{ locale[this.$store.state.lang].buttons.continue }}</button>
                    </div>
                    <div class="col-xl-6 col-lg-6 t_a_r_m o_1 m_b_30">
                      <nuxt-link to="/auth/forgot-password">{{ locale[this.$store.state.lang].buttons.forgot }}</nuxt-link>
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
import {locale} from "../../middleware/localeLang";

import { email, minLength, required } from 'vuelidate/lib/validators'
export default {
  name: "login",
  data() {
    return {
      locale: locale,
      email: '',
      password: '',
      error: null
    }
  },
  validations: {
    email: {
      email,
      required
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    async handleLogin () {
      this.$v.$touch();

      if(!this.$v.$invalid){
        await this.$axios.$post('login', {
          email: this.email,
          password: this.password
        })
          .then((res) => {
            localStorage.setItem('token', res.token)

            this.$cookies.set('userToken', res.token, 18000)
            this.$cookies.set('token_time', new Date(), 18000)

            this.$router.push({
              name: 'auth-profile'
            })
          }).catch(err => {
            this.error = err.response.data.error
          })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .login_content {
    margin: 40px 0;
    .address_card {
      span::before {
        padding: 0;
      }
    }
    .action_auth {
      a {
        color: #757575;
        font-weight: 500;
        font-size: 14px;
      }
    }
    .t_a_r_m {
      text-align: right;
    }
  }
  @media screen and (max-width: 768px){
    .o_1 {
      order: 1;
    }
    .o_2 {
      order: 2;
    }
    .m_b {
      margin-bottom: 50px;
    }
    .m_b_30 {
      margin-bottom: 30px;
    }
    .t_a_r_m {
      text-align: left !important;
    }
  }
</style>

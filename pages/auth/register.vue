<template>
  <div class="register p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/auth/register">Регистрация</nuxt-link>
      </div>
      <div class="p_title">
        <p>{{ locale[this.$store.state.lang].contentTitle.registerText }}</p>
      </div>
      <div class="card_title">
        <p>{{ locale[this.$store.state.lang].contentTitle.hasUser }} <b>
          <nuxt-link :to="{ name: 'auth-login' }">{{ locale[this.$store.state.lang].buttons.loginText }}</nuxt-link>
        </b></p>
      </div>
      <div class="register_content">
        <div class="contacts_form">
          <div class="contacts_title">
            <p>{{ locale[this.$store.state.lang].contentTitle.personalData }}</p>
          </div>
          <div class="form">
            <form @submit.prevent="register">
              <div class="inputs">
                <div class="row">
                  <div class="col-xl-2 col-lg-2">
                    <span class="necessarily custom_span">{{ locale[this.$store.state.lang].form.nameText }}</span>
                  </div>
                  <div class="col-xl-10 col-lg-10">
                    <input class="custom_input" type="text" v-model="name" :class="{ invalid:($v.name.$dirty && !$v.name.required)
                          || ($v.name.$dirty && !$v.name.minLength)}">
                    <span class="error" v-if="$v.name.$dirty && !$v.name.minLength">{{locale[this.$store.state.lang].errors.nameLength }}</span>
                    <span class="error" v-if="$v.name.$dirty && !$v.name.required">{{locale[this.$store.state.lang].errors.requiredField }}</span>
                  </div>
                </div>
              </div>
              <div class="inputs">
                <div class="row">
                  <div class="col-xl-2 col-lg-2">
                    <span class="necessarily custom_span">{{ locale[this.$store.state.lang].form.surnameText }}</span>
                  </div>
                  <div class="col-xl-10 col-lg-10">
                    <input class="custom_input" type="text" v-model="surname" :class="{ invalid:($v.surname.$dirty && !$v.surname.required)
                          || ($v.surname.$dirty && !$v.surname.minLength)}">
                    <span class="error" v-if="$v.surname.$dirty && !$v.surname.minLength">{{locale[this.$store.state.lang].errors.surnameLength }}</span>
                    <span class="error" v-if="$v.surname.$dirty && !$v.surname.required">{{locale[this.$store.state.lang].errors.requiredField }}</span>
                  </div>
                </div>
              </div>
              <div class="inputs">
                <div class="row">
                  <div class="col-xl-2 col-lg-2">
                    <span class="necessarily custom_span">Телефон</span>
                  </div>
                  <div class="col-xl-10 col-lg-10">
                    <the-mask class="custom_input" :masked="true" :mask="['+7(###) ###-##-##']" v-model="phone_number" :class="{ invalid:($v.phone_number.$dirty && !$v.phone_number.required)
                          || ($v.phone_number.$dirty && !$v.phone_number.minLength)}"/>
                    <span class="error" v-if="$v.phone_number.$dirty && !$v.phone_number.minLength">{{locale[this.$store.state.lang].errors.phoneLength }}</span>
                    <span class="error" v-if="$v.phone_number.$dirty && !$v.phone_number.required">{{locale[this.$store.state.lang].errors.requiredField }}</span>
                    <span class="error" v-if="error_password">{{ error_password}}</span>
                  </div>
                </div>
              </div>
              <div class="inputs">
                <div class="row">
                  <div class="col-xl-2 col-lg-2">
                    <span class="necessarily custom_span">Email</span>
                  </div>
                  <div class="col-xl-10 col-lg-10">
                    <input class="custom_input" type="email" v-model="email" :class="{ invalid:($v.email.$dirty && !$v.email.required)
                          || ($v.email.$dirty && !$v.email.email)}">
                    <span class="error" v-if="$v.email.$dirty && !$v.email.email">{{locale[this.$store.state.lang].errors.emailField }}</span>
                    <span class="error" v-if="$v.email.$dirty && !$v.email.required">{{locale[this.$store.state.lang].errors.requiredField }}</span>
                    <span class="error" v-if="error_email">{{ error_email}}</span>
                  </div>
                </div>
              </div>
              <div class="contacts_title">
                <p>{{ locale[this.$store.state.lang].form.passwordText }}</p>
              </div>
              <div class="inputs">
                <div class="row">
                  <div class="col-xl-2 col-lg-2">
                    <span class="necessarily custom_span">{{ locale[this.$store.state.lang].form.yourPasswordText }}</span>
                  </div>
                  <div class="col-xl-10 col-lg-10">
                    <input class="custom_input" type="password" v-model="password" :class="{invalid:($v.password.$dirty && !$v.password.required)
                          || ($v.password.$dirty && !$v.password.minLength)}">
                    <span class="error" v-if="$v.password.$dirty && !$v.password.required">{{locale[this.$store.state.lang].errors.requiredField }}</span>
                    <span class="error" v-if="$v.password.$dirty && !$v.password.minLength">{{locale[this.$store.state.lang].errors.passwordLength }}</span>
                  </div>
                </div>
              </div>
              <div class="inputs">
                <div class="row">
                  <div class="col-xl-2 col-lg-2 p_r_0">
                    <span class="necessarily pr-0 custom_span">{{ locale[this.$store.state.lang].form.repeatPassword }}</span>
                  </div>
                  <div class="col-xl-10 col-lg-10">
                    <input class="custom_input" type="password" v-model="confirm_password" :class="{invalid: ($v.confirm_password.$dirty && !$v.confirm_password.sameAsPassword)}">
                    <span class="error" v-if="$v.confirm_password.$dirty && !$v.confirm_password.sameAsPassword">{{locale[this.$store.state.lang].errors.confirmPasswordField }}</span>
                  </div>
                </div>
              </div>
              <div class="contacts_action">
                <button class="btn btn_silver">{{ locale[this.$store.state.lang].buttons.send }}</button>
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

import { email, minLength, required, sameAs } from 'vuelidate/lib/validators'
export default {
  name: "register",
  data () {
    return {
      locale: locale,
      name: '',
      surname: '',
      phone_number: '',
      email: '',
      password: '',
      confirm_password: '',
      error_email: null,
      error_password: null
    }
  },
  methods: {
    async register () {
      this.$v.$touch();

      if(!this.$v.$invalid) {
        await this.$axios.post('register', {
          name: this.name,
          last_name: this.surname,
          phone: this.phone_number,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirm_password
        })
          .then(res => {
            this.$router.push({
              name: 'auth-login'
            })
          }).catch(err => {
            this.error_email = err.response.data.errors.email[0]
            this.error_password = err.response.data.errors.phone[0]
          })
      }
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(3)
    },
    surname: {
      required,
      minLength: minLength(3)
    },
    phone_number: {
      required,
      minLength: minLength(17)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirm_password: {
      sameAsPassword: sameAs('password')
    }
  }
}
</script>

<style lang="scss" scoped>
  .register_content {
    .contacts_title {
      margin-top: 50px;
    }
  }
</style>

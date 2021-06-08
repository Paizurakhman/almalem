<template>
  <div class="reset p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/auth/login">Логин</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/auth/forgot-password">Восстановление</nuxt-link>
      </div>
      <form @submit.prevent="resetPassword">
        <div class="address_card">
          <div class="card_title">
            <p>{{ locale[this.$store.state.lang].contentTitle.resetText}}</p>
          </div>

          <div class="contacts_form">
            <div class="form">
              <div class="inputs">
                <p>{{ locale[this.$store.state.lang].form.newPasswordText}}</p>
                <input class="custom_input" type="password" v-model="new_password" :class="{ invalid:($v.new_password.$dirty && !$v.new_password.required)
                          || ($v.new_password.$dirty && !$v.new_password.minLength)}">
                <span class="error" v-if="$v.new_password.$dirty && !$v.new_password.required">Password required</span>
                <span class="error" v-if="$v.new_password.$dirty && !$v.new_password.minLength">Password must be at least 6 characters</span>
              </div>
              <div class="inputs">
                <p>{{ locale[this.$store.state.lang].form.confirmNewPassword}}</p>
                <input class="custom_input" type="password" v-model="repeat_password" :class="{ invalid:($v.repeat_password.$dirty && !$v.repeat_password.required)
                          || ($v.repeat_password.$dirty && !$v.repeat_password.sameAsPassword)}">
                <span class="error" v-if="$v.repeat_password.$dirty && !$v.repeat_password.required">Confirm password required</span>
                <span class="error" v-if="$v.repeat_password.$dirty && !$v.repeat_password.sameAsPassword">Confirm password must be identical.</span>

              </div>
<!--              <p class="t_green">Письмо со ссылкой для восстановления пароля выслано на <b>user@mail.</b></p>-->
            </div>
          </div>
          <div class="action_auth">
            <button class="btn btn_silver">{{ locale[this.$store.state.lang].buttons.continue }}</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {locale} from "../middleware/localeLang";
import { required, sameAs, minLength } from 'vuelidate/lib/validators'
export default {
  name: "reset",
  data() {
    return {
      locale: locale,
      new_password: '',
      repeat_password: ''
    }
  },
  methods: {
    async resetPassword () {
      this.$v.$touch();

      if(!this.$v.$invalid) {
        await this.$axios.$post('password/reset?email=' + this.$route.query.email +
          '&token=' + this.$route.query.token, {
          password: this.new_password,
          password_confirmation: this.repeat_password
        })
          .then(res => {
            console.log(res)
          })
      }
    }
  },
  validations: {
    new_password: {
      required,
      minLength: minLength(6)
    },
    repeat_password: {
      required,
      sameAsPassword: sameAs('new_password')
    }
  }
}
</script>

<style scoped lang="scss">
  .reset {
    form {
      max-width: 600px;
      margin-top: 40px;
      .form {
        margin-bottom: 20px;
        p {
          font-size: 14px;
          margin-bottom: 8px;
        }
      }
    }
  }
</style>

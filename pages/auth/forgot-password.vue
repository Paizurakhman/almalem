<template>
  <div class="forgot_password p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/auth/login">Логин</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/auth/forgot-password">Восстановление аккаунта</nuxt-link>
      </div>
      <form @submit.prevent="resetPassword">
        <div class="address_card">
          <div class="card_title">
            <p>Восстановление аккаунта</p>
          </div>

          <div class="contacts_form">
            <div class="form">
              <div class="inputs">
                <p>Адрес эл.почты</p>
                <input class="custom_input" type="email" v-model="email" :class="{ invalid:($v.email.$dirty && !$v.email.required)
                          || ($v.email.$dirty && !$v.email.email)}">
                <span class="error" v-if="$v.email.$dirty && !$v.email.email">You have entered an invalid email address!</span>
                <span class="error" v-if="$v.email.$dirty && !$v.email.required">Email required</span>
              </div>
              <p class="error" v-if="error">{{error}}</p>
              <p v-if="success" class="t_green">Письмо со ссылкой для восстановления пароля выслано на <b>{{email}}</b></p>
            </div>
          </div>
          <div class="action_auth">
            <button class="btn btn_silver">Продолжить</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {required, email} from 'vuelidate/lib/validators'
export default {
  name: "forgot-password",
  data() {
    return {
      email: '',
      success: null,
      error: null
    }
  },
  methods: {
    async resetPassword () {
      this.$v.$touch();

      if(!this.$v.$invalid) {
        await this.$axios.$get('password/email', {
          params: {
            email: this.email
          }
        })
          .then(res => {
            this.success = true
          }).catch(err => {
            this.error = err.response.data.error
          })
      }
    }
  },
  validations: {
    email: {
      required,
      email
    }
  }
}
</script>

<style scoped lang="scss">
  .forgot_password {
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

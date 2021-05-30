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
            <p>Восстановление</p>
          </div>

          <div class="contacts_form">
            <div class="form">
              <div class="inputs">
                <p>Новый пароль</p>
                <input type="password" v-model="new_password">
              </div>
              <div class="inputs">
                <p>Подтвердите новый пароль</p>
                <input type="password" v-model="repeat_password">
              </div>
<!--              <p class="t_green">Письмо со ссылкой для восстановления пароля выслано на <b>user@mail.</b></p>-->
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
export default {
  name: "reset",
  data() {
    return {
      new_password: '',
      repeat_password: ''
    }
  },
  methods: {
    async resetPassword () {
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

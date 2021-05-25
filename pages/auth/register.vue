<template>
  <div class="register p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/">Аккаунт</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/auth/register">Регистрация</nuxt-link>
      </div>
      <div class="p_title">
        <p>Регистрация пользователя</p>
      </div>
      <div class="card_title">
        <p>Если у вас уже есть учетная запись у нас, пожалуйста, войдите на страницу <b>входа.</b></p>
      </div>
      <div class="register_content">
        <div class="contacts_form">
          <div class="contacts_title">
            <p>Личные данные</p>
          </div>
          <div class="form">
            <form @submit.prevent="register">
              <div class="inputs">
                <div class="row">
                  <div class="col-xl-2 col-lg-2">
                    <span class="necessarily">Имя</span>
                  </div>
                  <div class="col-xl-10 col-lg-10">
                    <input type="text" v-model="name">
                  </div>
                </div>
              </div>
              <div class="inputs">
                <div class="row">
                  <div class="col-xl-2 col-lg-2">
                    <span class="necessarily">Фамилия</span>
                  </div>
                  <div class="col-xl-10 col-lg-10">
                    <input type="text" v-model="surname">
                  </div>
                </div>
              </div>
              <div class="inputs">
                <div class="row">
                  <div class="col-xl-2 col-lg-2">
                    <span class="necessarily">Телефон</span>
                  </div>
                  <div class="col-xl-10 col-lg-10">
                    <the-mask :mask="['+#(###) ###-##-##']" v-model="phone_number"/>
                  </div>
                </div>
              </div>
              <div class="inputs">
                <div class="row">
                  <div class="col-xl-2 col-lg-2">
                    <span class="necessarily">Email</span>
                  </div>
                  <div class="col-xl-10 col-lg-10">
                    <input type="email" v-model="email">
                  </div>
                </div>
              </div>
              <div class="contacts_title">
                <p>Пароль</p>
              </div>
              <div class="inputs">
                <div class="row">
                  <div class="col-xl-2 col-lg-2">
                    <span class="necessarily">Ваш пароль</span>
                  </div>
                  <div class="col-xl-10 col-lg-10">
                    <input type="password" v-model="password">
                  </div>
                </div>
              </div>
              <div class="inputs">
                <div class="row">
                  <div class="col-xl-2 col-lg-2 p_r_0">
                    <span class="necessarily pr-0">Подтвердите пароль</span>
                  </div>
                  <div class="col-xl-10 col-lg-10">
                    <input type="password" v-model="confirm_password">
                  </div>
                </div>
              </div>
              <div class="contacts_action">
                <button class="btn btn_silver">Отправить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data () {
    return {
      name: '',
      surname: '',
      phone_number: '',
      email: '',
      password: '',
      confirm_password: ''
    }
  },
  methods: {
    async register () {
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
      })
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

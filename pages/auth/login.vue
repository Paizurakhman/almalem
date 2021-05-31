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
                <p>Новый клиент</p>
              </div>
              <div class="c_title">
                <p class="b_text">Регистрация</p>
                <p class="silver_text">Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Ut felis magna tristique non ipsum donec.
                  Proin aenean sed placerat ut.</p>
              </div>
              <nuxt-link :to="{name: 'auth-register'}" class="btn btn_silver">Продолжить</nuxt-link>
            </div>
          </div>

          <div class="col-xl-6 col-lg-6">
            <form @submit.prevent="handleLogin">
              <div class="address_card">
                <div class="card_title">
                  <p>У меня есть аккаунт</p>
                </div>
                <div class="c_title">
                  <p class="b_text">Логин</p>
                  <div class="contacts_form">

                    <div class="form">
                      <form>
                        <div class="inputs">
                          <span>E-mail</span>
                          <input type="email" v-model="email" :class="{invalid:($v.email.$dirty && !$v.email.required)
                          || ($v.email.$dirty && !$v.email.email)}">
                          <span class="error" v-if="$v.email.$dirty && !$v.email.email">You have entered an invalid email address!</span>
                          <span class="error" v-if="$v.email.$dirty && !$v.email.required">Email required</span>
                        </div>
                        <div class="inputs">
                          <span>Пароль</span>
                          <input type="password" v-model.trim="password" :class="{invalid:($v.password.$dirty && !$v.password.required)
                          || ($v.password.$dirty && !$v.password.minLength)}">
                          <span class="error" v-if="$v.password.$dirty && !$v.password.required">Password required</span>
                          <span class="error" v-if="$v.password.$dirty && !$v.password.minLength">Password must be at least 6 characters</span>
                        </div>
                        <p class="error" v-if="error">{{ error }}</p>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="action_auth">
                  <div class="row align-items-center">
                    <div class="col-xl-6 col-lg-6 o_2">
                      <button class="btn btn_silver" >Продолжить</button>
                    </div>
                    <div class="col-xl-6 col-lg-6 t_a_r_m o_1 m_b_30">
                      <nuxt-link to="/auth/forgot-password">Не помню логин или пароль</nuxt-link>
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
import { email, minLength, required } from 'vuelidate/lib/validators'
export default {
  name: "login",
  data() {
    return {
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

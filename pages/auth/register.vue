<template>
  <div class="register p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/auth/register">Регистрация</nuxt-link>
      </div>
      <div class="p_title">
        <p>Регистрация пользователя</p>
      </div>
      <div class="card_title">
        <p>Если у вас уже есть учетная запись у нас, пожалуйста, войдите на страницу <b>
          <nuxt-link :to="{ name: 'auth-login' }">входа.</nuxt-link>
        </b></p>
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
                    <span class="necessarily custom_span">Имя</span>
                  </div>
                  <div class="col-xl-10 col-lg-10">
                    <input class="custom_input" type="text" v-model="name" :class="{ invalid:($v.name.$dirty && !$v.name.required)
                          || ($v.name.$dirty && !$v.name.minLength)}">
                    <span class="error" v-if="$v.name.$dirty && !$v.name.minLength">Name must be at least 3 characters</span>
                    <span class="error" v-if="$v.name.$dirty && !$v.name.required">Name required</span>
                  </div>
                </div>
              </div>
              <div class="inputs">
                <div class="row">
                  <div class="col-xl-2 col-lg-2">
                    <span class="necessarily custom_span">Фамилия</span>
                  </div>
                  <div class="col-xl-10 col-lg-10">
                    <input class="custom_input" type="text" v-model="surname" :class="{ invalid:($v.surname.$dirty && !$v.surname.required)
                          || ($v.surname.$dirty && !$v.surname.minLength)}">
                    <span class="error" v-if="$v.surname.$dirty && !$v.surname.minLength">Last name must be at least 3 characters</span>
                    <span class="error" v-if="$v.surname.$dirty && !$v.surname.required">Last name required</span>
                  </div>
                </div>
              </div>
              <div class="inputs">
                <div class="row">
                  <div class="col-xl-2 col-lg-2">
                    <span class="necessarily custom_span">Телефон</span>
                  </div>
                  <div class="col-xl-10 col-lg-10">
                    <the-mask class="custom_input" :mask="['+7(###) ###-##-##']" v-model="phone_number" :class="{ invalid:($v.phone_number.$dirty && !$v.phone_number.required)
                          || ($v.phone_number.$dirty && !$v.phone_number.minLength)}"/>
                    <span class="error" v-if="$v.phone_number.$dirty && !$v.phone_number.minLength">Phone number must be at least 11 numbers</span>
                    <span class="error" v-if="$v.phone_number.$dirty && !$v.phone_number.required">Phone number required</span>
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
                    <span class="error" v-if="$v.email.$dirty && !$v.email.email">You have entered an invalid email address!</span>
                    <span class="error" v-if="$v.email.$dirty && !$v.email.required">Email required</span>
                    <span class="error" v-if="error_email">{{ error_email}}</span>
                  </div>
                </div>
              </div>
              <div class="contacts_title">
                <p>Пароль</p>
              </div>
              <div class="inputs">
                <div class="row">
                  <div class="col-xl-2 col-lg-2">
                    <span class="necessarily custom_span">Ваш пароль</span>
                  </div>
                  <div class="col-xl-10 col-lg-10">
                    <input class="custom_input" type="password" v-model="password" :class="{invalid:($v.password.$dirty && !$v.password.required)
                          || ($v.password.$dirty && !$v.password.minLength)}">
                    <span class="error" v-if="$v.password.$dirty && !$v.password.required">Password required</span>
                    <span class="error" v-if="$v.password.$dirty && !$v.password.minLength">Password must be at least 6 characters</span>
                  </div>
                </div>
              </div>
              <div class="inputs">
                <div class="row">
                  <div class="col-xl-2 col-lg-2 p_r_0">
                    <span class="necessarily pr-0 custom_span">Подтвердите пароль</span>
                  </div>
                  <div class="col-xl-10 col-lg-10">
                    <input class="custom_input" type="password" v-model="confirm_password" :class="{invalid:($v.confirm_password.$dirty && !$v.confirm_password.required)
                          || ($v.confirm_password.$dirty && !$v.confirm_password.sameAsPassword)}">
                    <span class="error" v-if="$v.confirm_password.$dirty && !$v.confirm_password.required">Confirm password required</span>
                    <span class="error" v-if="$v.confirm_password.$dirty && !$v.confirm_password.sameAsPassword">Confirm password must be identical.</span>
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
import { email, minLength, required, sameAs } from 'vuelidate/lib/validators'
export default {
  name: "register",
  data () {
    return {
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
      minLength: minLength(11)
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
      required,
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

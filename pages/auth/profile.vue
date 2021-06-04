<template>
  <div class="profile p_page" v-if="userData">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/">Аккаунт</nuxt-link>
      </div>
      <div class="profile_header">
        <button
          @click="handleClick('account')"
          :class="{activeButton: edit_info === 'account'}"
        >Мой аккаунт</button>
        <button
          @click="handleClick('edit')"
          :class="{activeButton: edit_info === 'edit'}"
        >Изменить информацию</button>
      </div>
      <div class="login_content" v-if="edit_info === 'account'">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="contacts_form">
              <div class="contacts_title">
                <p>Личные данные</p>
              </div>
              <div class="form">
                <div class="inputs">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-4">
                      <p>Имя</p>
                    </div>
                    <div class="col-xl-8 col-lg-8 col-8">
                      <p>{{ userData.user.name }}</p>
                    </div>
                  </div>
                </div>
                <div class="inputs">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-4">
                      <p>Фамилия</p>
                    </div>
                    <div class="col-xl-8 col-lg-8 col-8">
                      <p>{{ userData.user.last_name }}</p>
                    </div>
                  </div>
                </div>
                <div class="inputs">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-4">
                      <p>Телефон</p>
                    </div>
                    <div class="col-xl-8 col-lg-8 col-8">
                      <p>{{userData.user.phone}}</p>
                    </div>
                  </div>
                </div>
                <div class="inputs">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-4">
                      <p>Email</p>
                    </div>
                    <div class="col-xl-8 col-lg-8 col-8">
                      <p>{{ userData.user.email }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="contacts_form">
              <div class="contacts_title">
                <p>Адрес доставки</p>
              </div>
              <div class="form">
                <div class="inputs">
                  <div class="row">
                    <div class="col-xl-3 col-lg-3 col-4">
                      <p>Регион</p>
                    </div>
                    <div class="col-xl-8 col-lg-8 col-8">
                      <p v-if="userData.user.region">{{ userData.user.region }}</p>
                      <p v-else class="error">Не указана</p>
                    </div>
                  </div>
                </div>
                <div class="inputs">
                  <div class="row">
                    <div class="col-xl-3 col-lg-3 col-4">
                      <p>Город</p>
                    </div>
                    <div class="col-xl-8 col-lg-8 col-8">
                      <p v-if="userData.user.city">{{ userData.user.city }}</p>
                      <p v-else class="error">Не указана</p>
                    </div>
                  </div>
                </div>
                <div class="inputs">
                  <div class="row">
                    <div class="col-xl-3 col-lg-3 col-4">
                      <p>Улица</p>
                    </div>
                    <div class="col-xl-8 col-lg-8 col-8">
                      <p v-if="userData.user.street">{{ userData.user.street }}</p>
                      <p v-else class="error">Не указана</p>
                    </div>
                  </div>
                </div>
                <div class="inputs">
                  <div class="row">
                    <div class="col-xl-3 col-lg-3 col-3">
                      <p>Дом</p>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-3">
                      <p v-if="userData.user.house">{{ userData.user.house }}</p>
                      <p v-else class="error">Не указана</p>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-3">
                      <p>Подъезд</p>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-3">
                      <p v-if="userData.user.entrance">{{ userData.user.entrance }}</p>
                      <p v-else class="error">Не указана</p>
                    </div>
                  </div>
                </div>
                <div class="inputs">
                  <div class="row">
                    <div class="col-xl-3 col-lg-3 col-3">
                      <p>Корпус</p>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-3">
                      <p v-if="userData.user.building">{{ userData.user.building }}</p>
                      <p v-else class="error">Не указана</p>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-3">
                      <p>Этаж</p>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-3">
                      <p v-if="userData.user.floor">{{ userData.user.floor }}</p>
                      <p v-else class="error">Не указана</p>
                    </div>
                  </div>
                </div>
                <div class="inputs">
                  <div class="row">
                    <div class="col-xl-3 col-lg-3 p_r_0 col-3">
                      <p>Квартира</p>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-3">
                      <p v-if="userData.user.apartment">{{ userData.user.apartment }}</p>
                      <p v-else class="error">Не указана</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="profile_action">
          <div class="active_orders">
            <p>Активные заказы</p>
            <nuxt-link :to="{ name: 'history' }" class="btn btn_main">Смотреть</nuxt-link>
          </div>
          <button class="btn btn_silver" @click="logout">Выйти с аккаунта</button>
        </div>
      </div>
      <div class="login_content" v-if="edit_info === 'edit'">
        <form @submit.prevent="updateProfile">
          <div class="row">
            <div class="col-xl-6 col-lg-6">
              <div class="contacts_form">
                <div class="contacts_title">
                  <p>Личные данные</p>
                </div>
                <div class="form">
                    <div class="inputs">
                      <div class="row">
                        <div class="col-xl-4 col-lg-4">
                          <p>Имя</p>
                        </div>
                        <div class="col-xl-8 col-lg-8">
                          <input class="custom_input" type="text" v-model="profileEdit.name">
                        </div>
                      </div>
                    </div>
                    <div class="inputs">
                      <div class="row">
                        <div class="col-xl-4 col-lg-4">
                          <p>Фамилия</p>
                        </div>
                        <div class="col-xl-8 col-lg-8">
                          <input class="custom_input" type="text" v-model="profileEdit.first_name">
                        </div>
                      </div>
                    </div>
                    <div class="inputs">
                      <div class="row">
                        <div class="col-xl-4 col-lg-4">
                          <p>Телефон</p>
                        </div>
                        <div class="col-xl-8 col-lg-8">
                          <the-mask class="custom_input" :mask="['+7(###) ###-##-##']" v-model="profileEdit.phone"/>
                        </div>
                      </div>
                    </div>
                    <div class="inputs">
                      <div class="row">
                        <div class="col-xl-4 col-lg-4">
                          <p>Email</p>
                        </div>
                        <div class="col-xl-8 col-lg-8">
                          <input class="custom_input" type="email" v-model="profileEdit.email">
                        </div>
                      </div>
                    </div>
                    <div class="contacts_title">
                      <p>Пароль</p>
                    </div>
                    <div class="inputs">
                      <div class="row">
                        <div class="col-xl-4 col-lg-4">
                          <p>Старый пароль</p>
                        </div>
                        <div class="col-xl-8 col-lg-8">
                          <input class="custom_input" type="password" v-model="password">
                        </div>
                      </div>
                    </div>
                  <div class="inputs">
                    <div class="row">
                      <div class="col-xl-4 col-lg-4">
                        <p>Новый пароль</p>
                      </div>
                      <div class="col-xl-8 col-lg-8">
                        <input class="custom_input" type="password" v-model="password">
                      </div>
                    </div>
                  </div>
                    <div class="inputs">
                      <div class="row">
                        <div class="col-xl-4 col-lg-4 p_r_0">
                          <p>Подтвердите пароль</p>
                        </div>
                        <div class="col-xl-8 col-lg-8">
                          <input class="custom_input" type="password" v-model="confirm_password">
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="contacts_form">
                <div class="contacts_title">
                  <p>Адрес доставки</p>
                </div>
                <div class="form">
                  <div class="inputs">
                    <div class="row">
                      <div class="col-xl-4 col-lg-4">
                        <p>Регион</p>
                      </div>
                      <div class="col-xl-8 col-lg-8">
                        <input class="custom_input" type="text" v-model="profileEdit.region">
                      </div>
                    </div>
                  </div>
                  <div class="inputs">
                    <div class="row">
                      <div class="col-xl-4 col-lg-4">
                        <p>Город</p>
                      </div>
                      <div class="col-xl-8 col-lg-8">
                        <input class="custom_input" type="text" v-model="profileEdit.city">
                      </div>
                    </div>
                  </div>
                  <div class="inputs">
                    <div class="row">
                      <div class="col-xl-4 col-lg-4">
                        <p>Улица</p>
                      </div>
                      <div class="col-xl-8 col-lg-8">
                        <input class="custom_input" type="text" v-model="profileEdit.street">
                      </div>
                    </div>
                  </div>
                  <div class="inputs">
                    <div class="row">
                      <div class="col-xl-4 col-lg-4 col-4">
                        <p>Дом</p>
                      </div>
                      <div class="col-xl-3 col-lg-3 col-3">
                        <input class="custom_input" type="text" v-model="profileEdit.house">
                      </div>
                      <div class="col-xl-2 col-lg-2">
                        <p>Подъезд</p>
                      </div>
                      <div class="col-xl-3 col-lg-3">
                        <input class="custom_input" type="text" v-model="profileEdit.entrance">
                      </div>
                    </div>
                  </div>
                  <div class="inputs">
                    <div class="row">
                      <div class="col-xl-4 col-lg-4">
                        <p>Корпус</p>
                      </div>
                      <div class="col-xl-3 col-lg-3">
                        <input class="custom_input" type="text" v-model="profileEdit.building">
                      </div>
                      <div class="col-xl-2 col-lg-2">
                        <p>Этаж</p>
                      </div>
                      <div class="col-xl-3 col-lg-3">
                        <input  class="custom_input"type="text" v-model="profileEdit.floor">
                      </div>
                    </div>
                  </div>
                  <div class="inputs">
                    <div class="row">
                      <div class="col-xl-4 col-lg-4 p_r_0">
                        <p>Квартира</p>
                      </div>
                      <div class="col-xl-3 col-lg-3">
                        <input class="custom_input" type="text" v-model="profileEdit.apartment">
                      </div>
                    </div>
                  </div>
                  <div class="contacts_action">
                    <button class="btn btn_silver">Сохранить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      edit_info: 'account',
      userData: null,
      password: '',
      confirm_password: '',
      profileEdit: {
        name: '',
        first_name: '',
        phone: '',
        email: '',
        region: '',
        city: '',
        street: '',
        house: '',
        building: '',
        entrance: '',
        floor: '',
        apartment: '',
        token: null
      }
    }
  },
  methods: {
    handleClick(by) {
      this.edit_info = by
    },
    async updateProfile () {
      this.profileEdit.token = localStorage.getItem('token')
      await this.$axios.$post('user-update', this.profileEdit)
      .then(res => {
        this.userData = res
      })
    },

    logout(){
      localStorage.removeItem('token')
      if (localStorage.getItem('token') === null) {
        this.$router.push({name: 'auth-login'})
      }
    }
  },
  async mounted() {
    await this.$axios.$post('user-profile?token=' + localStorage.getItem('token'))
    .then(res => {
      this.userData = res
      this.profileEdit.name = res.user.name
      this.profileEdit.first_name = res.user.last_name
      this.profileEdit.phone = res.user.phone
      this.profileEdit.email = res.user.email
      this.profileEdit.region = res.user.region
      this.profileEdit.city = res.user.city
      this.profileEdit.street = res.user.street
      this.profileEdit.house = res.user.house
      this.profileEdit.entrance = res.user.entrance
      this.profileEdit.building = res.user.building
      this.profileEdit.floor = res.user.floor
      this.profileEdit.apartment = res.user.apartment
    })
  }
}
</script>

<style scoped lang="scss">
  .profile_header {
    margin: 40px 0 10px;
    button {
      border: transparent;
      background: transparent;
      margin-right: 30px;
      color: #6B6A6A;
      font-size: 18px;
      &.activeButton {
        color: #000000;
        font-size: 21px;
      }
    }
  }
  .profile_action {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    p {
      font-size: 18px;
      color: #3E444A;
    }
    .active_orders {
      a {
        padding: 16px 70px;
        display: block;
      }
    }
  }
  @media screen and (max-width: 576px){
    .profile_action {
      align-items: center;
      flex-direction: column;
      .active_orders {
        width: 100%;
        margin: 20px 0;
      }
      button {
        width: 100%;
      }
    }
    .contacts_action {
      button {
        width: 100%;
      }
    }
  }
</style>

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
        >{{ locale[this.$store.state.lang].buttons.my_account }}</button>
        <button
          @click="handleClick('edit')"
          :class="{activeButton: edit_info === 'edit'}"
        >{{ locale[this.$store.state.lang].buttons.change_info }}</button>
      </div>
      <div class="login_content" v-if="edit_info === 'account'">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="contacts_form">
              <div class="contacts_title">
                <p>{{ locale[this.$store.state.lang].contentTitle.personalData }}</p>
              </div>
              <div class="form">
                <div class="inputs">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-4">
                      <p>{{ locale[this.$store.state.lang].form.nameText }}</p>
                    </div>
                    <div class="col-xl-8 col-lg-8 col-8">
                      <p>{{ userData.user.name }}</p>
                    </div>
                  </div>
                </div>
                <div class="inputs">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-4">
                      <p>{{ locale[this.$store.state.lang].form.surnameText }}</p>
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
                <p>{{ locale[this.$store.state.lang].contentTitle.deliveryAddress }}</p>
              </div>
              <div class="form">
                <div class="inputs">
                  <div class="row">
                    <div class="col-xl-3 col-lg-3 col-4">
                      <p>{{ locale[this.$store.state.lang].address.region }}</p>
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
                      <p>{{ locale[this.$store.state.lang].address.city }}</p>
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
                      <p>{{ locale[this.$store.state.lang].address.street }}</p>
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
                      <p>{{ locale[this.$store.state.lang].address.house }}</p>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-3">
                      <p v-if="userData.user.house">{{ userData.user.house }}</p>
                      <p v-else class="error">Не указана</p>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-3">
                      <p>{{ locale[this.$store.state.lang].address.entrance }}</p>
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
                      <p>{{ locale[this.$store.state.lang].address.corps }}</p>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-3">
                      <p v-if="userData.user.building">{{ userData.user.building }}</p>
                      <p v-else class="error">Не указана</p>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-3">
                      <p>{{ locale[this.$store.state.lang].address.floor }}</p>
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
                      <p>{{ locale[this.$store.state.lang].address.apartment }}</p>
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
            <p>{{ locale[this.$store.state.lang].contentTitle.activeOrder }}</p>
            <nuxt-link :to="{ name: 'history' }" class="btn btn_main">{{ locale[this.$store.state.lang].buttons.view }}</nuxt-link>
          </div>
          <button class="btn btn_silver" @click="logout">{{ locale[this.$store.state.lang].buttons.logout }}</button>
        </div>
      </div>
      <div class="login_content" v-if="edit_info === 'edit'">
        <form @submit.prevent="updateProfile">
          <div class="row">
            <div class="col-xl-6 col-lg-6">
              <div class="contacts_form">
                <div class="contacts_title">
                  <p>{{ locale[this.$store.state.lang].contentTitle.personalData }}</p>
                </div>
                <div class="form">
                    <div class="inputs">
                      <div class="row">
                        <div class="col-xl-4 col-lg-4">
                          <p>{{ locale[this.$store.state.lang].form.nameText}}</p>
                        </div>
                        <div class="col-xl-8 col-lg-8">
                          <input class="custom_input" type="text" v-model="profileEdit.name" :class="{ invalid:($v.profileEdit.name.$dirty && !$v.profileEdit.name.required)
                          || ($v.profileEdit.name.$dirty && !$v.profileEdit.name.minLength)}">
                          <span class="error" v-if="$v.profileEdit.name.$dirty && !$v.profileEdit.name.minLength">Name must be at least 3 characters</span>
                          <span class="error" v-if="$v.profileEdit.name.$dirty && !$v.profileEdit.name.required">Name required</span>
                        </div>
                      </div>
                    </div>
                    <div class="inputs">
                      <div class="row">
                        <div class="col-xl-4 col-lg-4">
                          <p>{{ locale[this.$store.state.lang].form.surnameText }}</p>
                        </div>
                        <div class="col-xl-8 col-lg-8">
                          <input class="custom_input" type="text" v-model="profileEdit.first_name" :class="{ invalid:($v.profileEdit.first_name.$dirty && !$v.profileEdit.first_name.required)
                          || ($v.profileEdit.first_name.$dirty && !$v.profileEdit.first_name.minLength)}">
                          <span class="error" v-if="$v.profileEdit.first_name.$dirty && !$v.profileEdit.first_name.minLength">Last name must be at least 3 characters</span>
                          <span class="error" v-if="$v.profileEdit.first_name.$dirty && !$v.profileEdit.first_name.required">Last name required</span>
                        </div>
                      </div>
                    </div>
                    <div class="inputs">
                      <div class="row">
                        <div class="col-xl-4 col-lg-4">
                          <p>Телефон</p>
                        </div>
                        <div class="col-xl-8 col-lg-8">
                          <the-mask class="custom_input" :mask="['+7(###) ###-##-##']" v-model="profileEdit.phone" :class="{ invalid:($v.profileEdit.phone.$dirty && !$v.profileEdit.phone.required)
                          || ($v.profileEdit.phone.$dirty && !$v.profileEdit.phone.minLength)}"/>
                          <span class="error" v-if="$v.profileEdit.phone.$dirty && !$v.profileEdit.phone.minLength">Phone number must be at least 11 numbers</span>
                          <span class="error" v-if="$v.profileEdit.phone.$dirty && !$v.profileEdit.phone.required">Phone number required</span>
                        </div>
                      </div>
                    </div>
                    <div class="inputs">
                      <div class="row">
                        <div class="col-xl-4 col-lg-4">
                          <p>Email</p>
                        </div>
                        <div class="col-xl-8 col-lg-8">
                          <input class="custom_input" type="email" v-model="profileEdit.email" :class="{ invalid:($v.profileEdit.email.$dirty && !$v.profileEdit.email.required)
                          || ($v.profileEdit.email.$dirty && !$v.profileEdit.email.email)}">
                          <span class="error" v-if="$v.profileEdit.email.$dirty && !$v.profileEdit.email.email">You have entered an invalid email address!</span>
                          <span class="error" v-if="$v.profileEdit.email.$dirty && !$v.profileEdit.email.required">Email required</span>
                        </div>
                      </div>
                    </div>
                    <div class="contacts_title">
                      <p>{{ locale[this.$store.state.lang].form.passwordText }}</p>
                    </div>
                    <div class="inputs">
                      <div class="row">
                        <div class="col-xl-4 col-lg-4">
                          <p>{{ locale[this.$store.state.lang].form.oldPassword }}</p>
                        </div>
                        <div class="col-xl-8 col-lg-8">
                          <input class="custom_input" type="password" v-model="password">
                        </div>
                      </div>
                    </div>
                  <div class="inputs">
                    <div class="row">
                      <div class="col-xl-4 col-lg-4">
                        <p>{{ locale[this.$store.state.lang].form.newPasswordText }}</p>
                      </div>
                      <div class="col-xl-8 col-lg-8">
                        <input class="custom_input" type="password" v-model="password">
                      </div>
                    </div>
                  </div>
                    <div class="inputs">
                      <div class="row">
                        <div class="col-xl-4 col-lg-4 p_r_0">
                          <p>{{ locale[this.$store.state.lang].form.confirmNewPassword }}</p>
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
                  <p>{{ locale[this.$store.state.lang].contentTitle.deliveryAddress }}</p>
                </div>
                <div class="form">
                  <div class="inputs">
                    <div class="row">
                      <div class="col-xl-4 col-lg-4">
                        <p>{{ locale[this.$store.state.lang].address.region }}</p>
                      </div>
                      <div class="col-xl-8 col-lg-8">
                        <v-select
                          v-model="profileEdit.region"
                          :reduce="(region_id) => region_id.id"
                          @input="getCity"
                          :options="regions"
                          label="title"
                          placeholder="Регион"
                        ></v-select>
                      </div>
                    </div>
                  </div>
                  <div class="inputs">
                    <div class="row">
                      <div class="col-xl-4 col-lg-4">
                        <p>{{ locale[this.$store.state.lang].address.city }}</p>
                      </div>
                      <div class="col-xl-8 col-lg-8">
                        <v-select
                          v-model="profileEdit.city"
                          :reduce="(city_id) => city_id.id"
                          label="title"
                          v-if="cities"
                          placeholder="Город"
                          :options="cities"
                          :disabled="!profileEdit.region"
                        ></v-select>
                      </div>
                    </div>
                  </div>
                  <div class="inputs">
                    <div class="row">
                      <div class="col-xl-4 col-lg-4">
                        <p>{{ locale[this.$store.state.lang].address.street }}</p>
                      </div>
                      <div class="col-xl-8 col-lg-8">
                        <input class="custom_input" type="text" v-model="profileEdit.street">
                      </div>
                    </div>
                  </div>
                  <div class="inputs">
                    <div class="row">
                      <div class="col-xl-4 col-lg-4 col-4">
                        <p>{{ locale[this.$store.state.lang].address.house }}</p>
                      </div>
                      <div class="col-xl-3 col-lg-3 col-3">
                        <input class="custom_input" type="text" v-model="profileEdit.house">
                      </div>
                      <div class="col-xl-2 col-lg-2">
                        <p>{{ locale[this.$store.state.lang].address.entrance }}</p>
                      </div>
                      <div class="col-xl-3 col-lg-3">
                        <input class="custom_input" type="text" v-model="profileEdit.entrance">
                      </div>
                    </div>
                  </div>
                  <div class="inputs">
                    <div class="row">
                      <div class="col-xl-4 col-lg-4">
                        <p>{{ locale[this.$store.state.lang].address.corps }}</p>
                      </div>
                      <div class="col-xl-3 col-lg-3">
                        <input class="custom_input" type="text" v-model="profileEdit.building">
                      </div>
                      <div class="col-xl-2 col-lg-2">
                        <p>{{ locale[this.$store.state.lang].address.floor }}</p>
                      </div>
                      <div class="col-xl-3 col-lg-3">
                        <input class="custom_input"type="text" v-model="profileEdit.floor">
                      </div>
                    </div>
                  </div>
                  <div class="inputs">
                    <div class="row">
                      <div class="col-xl-4 col-lg-4 p_r_0">
                        <p>{{ locale[this.$store.state.lang].address.apartment }}</p>
                      </div>
                      <div class="col-xl-3 col-lg-3">
                        <input class="custom_input" type="text" v-model="profileEdit.apartment">
                      </div>
                    </div>
                  </div>
                  <div class="contacts_action">
                    <button class="btn btn_silver">{{ locale[this.$store.state.lang].buttons.save }}</button>
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
import {locale} from "../../middleware/localeLang";

import {email, minLength, required} from "vuelidate/lib/validators";

export default {
  name: "profile",
  data() {
    return {
      locale: locale,
      edit_info: 'account',
      userData: null,
      password: '',
      regions: null,
      cities: null,
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
      this.$v.$touch();

      if(!this.$v.$invalid) {
        await this.$axios.$post('user-update', this.profileEdit)
          .then(res => {
            this.userData = res
          })
      }
    },

    logout(){
      localStorage.removeItem('token')
      if (localStorage.getItem('token') === null) {
        this.$router.push({name: 'auth-login'})
      }
    },
    async getCity() {
      this.profileEdit.city = "";
      await this.$axios
        .$get("get-city", {
          params: {
            lang: this.$store.state.lang,
            region_id: this.profileEdit.region,
          },
        })
        .then((res) => {
          this.cities = res.cities;
        });
    },
  },
  async mounted() {
    await this.$axios
      .$get("get-region?lang=" + this.$store.state.lang)
      .then((res) => {
        this.regions = res.regions;
      })
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
  },
  validations: {
    profileEdit: {
      name: {
        required,
        minLength: minLength(3)
      },
      first_name: {
        required,
        minLength: minLength(3)
      },
      phone: {
        required,
        minLength: minLength(10)
      },
      email: {
        required,
        email
      },
    }
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

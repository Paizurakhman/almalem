<template>
  <div class="contact_us p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/contacts">Контакты</nuxt-link>
      </div>
      <div class="p_title">
        <p>{{ locale[this.$store.state.lang].contentTitle.contact_us}}</p>
      </div>
      <div class="card_title">
        <p>{{ locale[this.$store.state.lang].contentTitle.our_address}}</p>
      </div>
      <div class="address_card" v-if="addressData">
        <div class="row">
          <div class="col-xl-4 col-lg-4">
            <div class="c_title">
              <p class="b_text">Алматы</p>
              <p class="silver_text">Компания "Alem Technology Ltd"
                ул. Площадь Республики, д. 13</p>
            </div>
            <div class="card_action">
              <button
                class="btn btn_silver"
                @click="showMap"
              >
                <span><img src="~/assets/icon/location.svg" alt=""></span>
                <span>{{ locale[this.$store.state.lang].buttons.view_in_map}}</span>
              </button>

              <div
                v-if="isShowMap"
                class="bg"
                @click.self="showMap"
              >
                <img
                  @click="showMap"
                  src="~/assets/icon/close.svg"
                  alt=""
                >
              </div>
              <transition name="map">
                <Modal v-if="isShowMap"/>
              </transition>

            </div>
          </div>
          <div class="col-xl-8 col-lg-8">
            <div class="contact_info">
              <div class="c_title">
                <p class="b_text">Телефон</p>
                <p class="silver_text">{{ addressData.addres.phone_number }}</p>
              </div>
              <div class="card_action mt-4">
                <div class="social_networks">
                <span class="mr-4">
                  <a :href="addressData.addres.facebook" target="_blank"><img src="~/assets/icon/facebook_silver.svg" alt=""></a>
                </span>
                  <span class="mr-4">
                    <a :href="addressData.addres.instagram" target="_blank">
                     <img src="~/assets/icon/instagram_silver.svg" alt="">
                    </a>
                </span>
                  <span class="mr-4">
                    <a :href="addressData.addres.youtube" target="_blank">
                      <img src="~/assets/icon/youtube_silver.svg" alt="">
                    </a>
                </span>
                  <span class="mr-4">
                    <a :href="addressData.addres.vk" target="_blank">
                      <img src="~/assets/icon/vk_silver.svg" alt="">
                    </a>
                </span>
                  <span class="mr-4">
                    <a :href="addressData.addres.odnoklassniki" target="_blank">
                      <img src="~/assets/icon/odnoklassniki_silver.svg" alt="">
                    </a>
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contacts_form">
        <div class="contacts_title">
          <p>{{ locale[this.$store.state.lang].contentTitle.contact_us}}</p>
        </div>
        <div class="form">
          <form @submit.prevent="sendContact">
            <div class="inputs">
              <div class="row">
                <div class="col-xl-2 col-lg-2">
                  <span class="necessarily custom_span">{{ locale[this.$store.state.lang].form.nameText }}</span>
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
                  <span class="necessarily custom_span">Телефон</span>
                </div>
                <div class="col-xl-10 col-lg-10">
                  <the-mask :masked="true" class="custom_input" :mask="['+7(###) ###-##-##']" v-model="phone" :class="{ invalid:($v.phone.$dirty && !$v.phone.required)
                          || ($v.phone.$dirty && !$v.phone.minLength)}"/>
                  <span class="error" v-if="$v.phone.$dirty && !$v.phone.minLength">Phone number must be at least 11 numbers</span>
                  <span class="error" v-if="$v.phone.$dirty && !$v.phone.required">Phone number required</span>
                </div>
              </div>
            </div>
            <div class="inputs">
              <div class="row">
                <div class="col-xl-2 col-lg-2">
                  <span class="necessarily custom_span">Email</span>
                </div>
                <div class="col-xl-10 col-lg-10">
                  <input class="custom_input" type="text" v-model="email" :class="{ invalid:($v.email.$dirty && !$v.email.required)
                          || ($v.email.$dirty && !$v.email.email)}">
                  <span class="error" v-if="$v.email.$dirty && !$v.email.email">You have entered an invalid email address!</span>
                  <span class="error" v-if="$v.email.$dirty && !$v.email.required">Email required</span>
                </div>
              </div>
            </div>
            <div class="inputs">
              <div class="row">
                <div class="col-xl-2 col-lg-2">
                  <span class="custom_span">Компания</span>
                </div>
                <div class="col-xl-10 col-lg-10">
                  <input class="custom_input" type="text" v-model="company">
                </div>
              </div>
            </div>
            <div class="inputs">
              <div class="row">
                <div class="col-xl-2 col-lg-2">
                  <span class="custom_span">{{ locale[this.$store.state.lang].form.messageText}}</span>
                </div>
                <div class="col-xl-10 col-lg-10">
                  <textarea v-model="message"></textarea>
                </div>
              </div>
            </div>
            <div class="contacts_action">
              <button class="btn btn_silver">{{ locale[this.$store.state.lang].buttons.send}}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {locale} from "../middleware/localeLang";
import { email, minLength, required } from 'vuelidate/lib/validators'
export default {
  name: "Contacts",
  data(){
    return {
      locale: locale,
      addressData: null,
      isShowMap: false,
      name: '',
      phone: '',
      email: '',
      company: '',
      message: ''
    }
  },
  methods: {
    showMap () {
      this.isShowMap = !this.isShowMap
    },
    async sendContact () {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        await this.$axios.post('feedback', {
          name: this.name,
          phone: this.phone,
          email: this.email,
          company: this.company,
          message: this.message
        })
        .then(res => {
          if(res.data) {
            this.name = ''
            this.phone = ''
            this.email = ''
            this.company = ''
            this.message = ''
          }
        })
      }
    }
  },
  validations: {
    name: {
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
    }
  },
  async mounted() {
    await this.$axios.get('address?lang=' + this.$store.state.lang)
    .then(res => {
      this.addressData = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
//.map-enter, .map-leave-to {
//  //opacity: 0;
//  transform: rotate(90deg);
//}
//.map-enter-active, .map-leave-active {
//  transition: all 0.5s ease;
//}

</style>

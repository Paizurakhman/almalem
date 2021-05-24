<template>
  <div class="contact_us p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/contacts">Контакты</nuxt-link>
      </div>
      <div class="p_title">
        <p>Свяжитесь с нами</p>
      </div>
      <div class="card_title">
        <p>Наш адрес</p>
      </div>
      <div class="address_card">
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
                <span>Смотреть на карте</span>
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
                <p class="silver_text">+7 (707) 567-89-00</p>
              </div>
              <div class="card_action mt-4">
                <div class="social_networks">
                <span class="mr-4">
                  <img src="~/assets/icon/facebook_silver.svg" alt="">
                </span>
                  <span class="mr-4">
                  <img src="~/assets/icon/instagram_silver.svg" alt="">
                </span>
                  <span class="mr-4">
                  <img src="~/assets/icon/youtube_silver.svg" alt="">
                </span>
                  <span class="mr-4">
                  <img src="~/assets/icon/vk_silver.svg" alt="">
                </span>
                  <span class="mr-4">
                  <img src="~/assets/icon/odnoklassniki_silver.svg" alt="">
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contacts_form">
        <div class="contacts_title">
          <p>Свяжитесь с нами</p>
        </div>
        <div class="form">
          <form @submit.prevent="sendContact">
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
                  <span class="necessarily">Телефон</span>
                </div>
                <div class="col-xl-10 col-lg-10">
                  <the-mask :mask="['+#(###) ###-##-##']" v-model="phone"/>
                </div>
              </div>
            </div>
            <div class="inputs">
              <div class="row">
                <div class="col-xl-2 col-lg-2">
                  <span class="necessarily">Email</span>
                </div>
                <div class="col-xl-10 col-lg-10">
                  <input type="text" v-model="email">
                </div>
              </div>
            </div>
            <div class="inputs">
              <div class="row">
                <div class="col-xl-2 col-lg-2">
                  <span>Компания</span>
                </div>
                <div class="col-xl-10 col-lg-10">
                  <input type="text" v-model="company">
                </div>
              </div>
            </div>
            <div class="inputs">
              <div class="row">
                <div class="col-xl-2 col-lg-2">
                  <span>Сообщение</span>
                </div>
                <div class="col-xl-10 col-lg-10">
                  <textarea v-model="message"></textarea>
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
</template>

<script>
export default {
  name: "Contacts",
  data(){
    return {
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
      if (this.name && this.email && this.phone) {
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
      } else {
          console.log("name required");
      }
    }
  },
  // async mounted() {
  //   await this.$axios.get('address')
  //   .then(res => {
  //     // console.log(res.data);
  //   })
  // }
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

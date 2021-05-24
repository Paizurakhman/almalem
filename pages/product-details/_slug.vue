<template>
  <div class="product_detail p_page" v-if="detailsData">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/catalog">Каталог</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/catalog">Detail</nuxt-link>
      </div>
      <div class="detail_content">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="card_images">
              <div class="detail_img">
                <img 
                  :src="this.$store.state.imageUrl + detailsData.product.product_images[0].image" 
                  alt=""
                >
              </div>
              <div class="container_slider">
                <div class="detail_carousel">
                  <VueSlickCarousel v-bind="settings">
                    <div v-for="s in 6" :key="s">
                      <img src="~/assets/img/detail_img.png" alt="">
                    </div>
                  </VueSlickCarousel>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="product_info_card">
              <div class="blue_text">
                <p class="title">{{ detailsData.product.title }}</p>
              </div>
              <div class="review_info">
                <div class="star_rating">
                  <span>*****</span>
                </div>
                <div class="review">
                  <span>(0 отзывов)</span>
                  <span>Оставить отзыв</span>
                </div>
              </div>
              <div class="product_price">
                <p>{{detailsData.product.price}} KZT</p>
              </div>
              <div class="product_status">
                <p>Налог: <span class="t_green">1000 KZT</span></p>
              </div>
              <div class="product_status">
                <p>Бренд: <span class="t_green">{{ detailsData.product.brand_name }}</span></p>
              </div>
              <div class="product_status">
                <p>Код продукта: <span class="t_green">{{ detailsData.product.artikul }}</span></p>
              </div>
              <div class="product_status">
                <p>Доступность: <span class="t_green">в наличии</span></p>
              </div>
              <div class="product_description">
                 {{detailsData.product.short_description}}
              </div>
              <div class="add_to_cart">
                <div class="row align-items-center">
                  <div class="col-xl-2 col-lg-2 p_r_0 col-md-2 col-3">
                    <p>Кол-во</p>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-3 col-5">
                    <input type="text" value="1">
                  </div>
                  <div class="col-xl-7 col-lg-7 col-md-7">
                    <div class="action_cart">
                      <button class="btn btn_main">+ Добавить в корзину</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="add_to_like">
                <img src="~/assets/icon/heart_silver.svg" alt="">
                <span>Добавить в избранные</span>
              </div>
              <div class="product_card_bottom t_none">
                <div class="row">
                  <div class="col-xl-4">
                    <div class="card_principle">
                      <img src="~/assets/icon/dostavka_silver.svg" alt="">
                      <p>Доставка по всему Казахстану</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="card_principle">
                      <img src="~/assets/icon/podderjka_silver.svg" alt="">
                      <p>Поддержка 24 часа в сутки</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="card_principle">
                      <img src="~/assets/icon/secure_silver.svg" alt="">
                      <p>Мы защитим ващи данные</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="description_content">
      <div class="container">
        <Description 
          :description="detailsData.product.description"
          :reviews="detailsData.reviews"
        />
      </div>
    </div>
    <div class="container">
      <div class="sales_content">
        <!-- <layout-slider :title="'Похожие товары'"/> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slug",
  data() {
    return {
      slug: this.$route.params.slug,
      detailsData: null,
      settings: {
        "dots": false,
        "arrows": true,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 4,
        "slidesToScroll": 1,
        "initialSlide": 0,
        "responsive": [
          {
            "breakpoint": 1027,
            "settings": {
              "slidesToShow": 4,
              "slidesToScroll": 1,
              "infinite": true,
              arrows: false
              // "dots": true
            }
          },
          {
            "breakpoint": 768,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 1,
              arrows: false
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              arrows: false,
              "slidesToShow": 3,
              "slidesToScroll": 1
            }
          }
        ]
      }
    }
  },
  async mounted() {
    await this.$axios.get('product?lang=' + this.$store.state.lang + '&slug=' + this.slug)
    .then(res => {
      this.detailsData = res.data
    })
  }
}
</script>

<style lang="scss" scoped>

</style>

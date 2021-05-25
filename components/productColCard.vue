<template>
  <nuxt-link :to="{
    name: 'product-details-slug',
    params: {
      slug: product.slug
    }
  }">
    <div class="product_card">
      <div class="row align-items-center position-relative">
        <div class="col-xl-3 col-lg-4">
          <div class="main_img">
            <div class="sale" v-if="product.sale">-{{product.sale}}</div>
            <img :src="this.$store.state.imageUrl + product.images.image" alt="">
          </div>
        </div>
        <div class="col-xl-9 col-lg-8 position-static">
          <div class="row">
            <div class="col-xl-7">
              <div class="card_title_content">
                <div class="blue_text">
                  {{ product.title }}
                </div>
                <div class="company_name">
                  <p>Company</p>
                </div>
                <div class="card_col_title">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique in quis habitant. Egestas urna, faucibus mauris maecenas condimentum varius ornare diam. Cras quis nunc orci, id gravida sit enim nisi. Augue cursus non nibh posuere a, aliquet sed. </p>
                </div>
              </div>
            </div>
            <div class="col-xl-5 position-static">
              <div class="product_card_left">
                <div class="product_status">
                  <div class="like">
                    <img src="~/assets/icon/black_heart.svg" alt="heart">
                  </div>
                  <div class="card_col_title">
                    <p>Доступно: <span>98 на складе</span></p>
                  </div>
                  <div class="price">
                    <p><span class="new_price">1400 ₸</span> <span class="old_price">1400₸</span></p>
                  </div>
                </div>
                <div class="add_to_card">
                  <button class="btn btn_main">Добавить в корзину</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "productColCard",
  props: ['product'],
}
</script>

<style scoped>

</style>

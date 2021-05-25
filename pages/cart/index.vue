<template>
  <div class="basket p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="" />
        <nuxt-link to="/brands">Бренды</nuxt-link>
      </div>
      <div class="p_title">
        <p>Корзина</p>
        <pre>{{ GET_CART }}</pre>
      </div>
      <div class="table_wrapper">
        <table class="table table-bordered table-responsive-sm">
          <thead>
          <tr>
            <th scope="col" width="190px">Картинка</th>
            <th scope="col" width="440px">Название</th>
            <th scope="col" width="190px">Количество</th>
            <th scope="col" width="190px">Цена за шт.</th>
            <th scope="col" width="190px">Общая цена</th>
          </tr>
          </thead>
          <tbody>
          <tr height="100px">
            <th scope="row" width="190px">
              <div class="table_img">
                <img src="~/assets/img/motor.png" alt="">
              </div>
            </th>
            <td width="440px">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
            <td width="190px">
              <div class="amount">
                <input type="text" value="1">
                <div class="clear">
                  <img src="~/assets/icon/clear_red.svg" alt="">
                </div>
              </div>
            </td>
            <td width="190px">
              <p class="t_price price">1400 ₸ <span class="old_price">2400 ₸</span></p>
            </td>
            <td width="190px">
              <div class="table_action">
                <p class="t_price price">1400 ₸</p>
                <img class="delete" src="~/assets/icon/clear.svg" alt="">
              </div>
            </td>
          </tr>
          <tr height="100px">
            <th scope="row" width="190px">
              <div class="table_img">
                <img src="~/assets/img/product.png" alt="">
              </div>
            </th>
            <td width="440px">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
            <td width="190px">
              <div class="amount">
                <input type="text" value="1">
                <div class="clear">
                  <img src="~/assets/icon/clear_red.svg" alt="">
                </div>
              </div>
            </td>
            <td width="190px">
              <p class="t_price price">1400 ₸ <span class="old_price">2400 ₸</span></p>
            </td>
            <td width="190px">
              <div class="table_action">
                <p class="t_price price">1400 ₸</p>
                <img class="delete" src="~/assets/icon/clear.svg" alt="">
              </div>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="t_action">
          <button class="btn btn_silver">Продолжить покупки</button>
          <nuxt-link :to="{ name: 'cart-checkout' }" class="btn btn_silver">Купить</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "basket",
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'GET_CART'
    ])
  }
}
</script>

<style scoped>

</style>

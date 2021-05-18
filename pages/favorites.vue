<template>
  <div class="favorites p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="" />
        <nuxt-link to="/brands">Бренды</nuxt-link>
      </div>
      <div class="p_title">
        <p>Мои избранные товары</p>
      </div>
      <div class="table_wrapper">
        <table class="table table-bordered table-responsive-sm">
          <thead>
          <tr>
            <th scope="col" width="190px">Картинка</th>
            <th scope="col" width="440px">Название</th>
            <th scope="col" width="190px">Наличие</th>
            <th scope="col" width="190px">Цена за шт.</th>
            <th scope="col" width="190px">Действие</th>
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
            <td width="190px">В наличии</td>
            <td width="190px">
              <p class="t_price price">1400 ₸ <span class="old_price">2400 ₸</span></p>
            </td>
            <td width="190px">
              <div class="table_action">
                <img class="basket_table" src="~/assets/icon/main/basket.svg" alt="img">
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
            <td width="190px">В наличии</td>
            <td width="190px">
              <p class="t_price price">1400 ₸ <span class="old_price">2400 ₸</span></p>
            </td>
            <td width="190px">
              <div class="table_action">
                <img class="basket_table" src="~/assets/icon/main/basket.svg" alt="img">
                <img class="delete" src="~/assets/icon/clear.svg" alt="">
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="contacts_form">
        <div class="contacts_action">
          <button class="btn btn_silver">Вперед</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "favorites"
}
</script>

<style scoped>

</style>

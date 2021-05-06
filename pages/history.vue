<template>
  <div class="history p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="" />
        <nuxt-link to="/brands">Бренды</nuxt-link>
      </div>
      <div class="p_title">
        <p>История заказов</p>
      </div>
      <div class="history_content">
        <order_card />
      </div>
      <div class="table_wrapper">
        <table class="table table-bordered table-responsive-sm">
          <thead>
            <tr>
              <th scope="col" width="190px">Номер заказа</th>
              <th scope="col" width="440px">Клиент</th>
              <th scope="col" width="190px">Lt</th>
              <th scope="col" width="190px">Handle</th>
              <th scope="col" width="190px">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" width="190px">324234</th>
              <td width="440px">Имя Фамилия</td>
              <td width="190px">Oto</td>
              <td width="190px">@mdo</td>
              <td width="190px">@mdo</td>
            </tr>
            <tr>
              <th scope="row" width="190px">324234</th>
              <td width="440px">Имя Фамилия</td>
              <td width="190px">Thn</td>
              <td width="190px">@fat</td>
              <td width="190px">@fat</td>
            </tr>
            <tr>
              <th scope="row" width="190px">324234</th>
              <td width="440px">Имя Фамилия</td>
              <td width="190px">@tr</td>
              <td width="190px">@twitter</td>
              <td width="190px">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import order_card from "@/components/order_card";
export default {
  name: "history",
  components: { order_card },
};
</script>

<style scoped>
</style>

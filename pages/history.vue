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
      <div class="table_wrapper">
        <table class="table table-bordered table-responsive-sm">
          <thead>
            <tr>
              <th scope="col" width="190px">Номер заказа</th>
              <th scope="col" width="440px">Клиент</th>
              <th scope="col" width="190px">Статус</th>
              <th scope="col" width="190px">Цена</th>
              <th scope="col" width="190px">Дата</th>
            </tr>
          </thead>
          <tbody>
            <tr height="100px">
              <th scope="row" width="190px">324234</th>
              <td width="440px">Имя Фамилия</td>
              <td width="190px">Обрабатывается</td>
              <td width="190px">1440 ₸</td>
              <td width="190px">
                <div class="data">
                  <p>12/03/2021</p>
                  <img src="~/assets/icon/show.svg" alt="">
                </div>
              </td>
            </tr>
            <tr height="100px">
              <th scope="row" width="190px">324234</th>
              <td width="440px">Имя Фамилия</td>
              <td width="190px">Доставлен</td>
              <td width="190px">1440 ₸</td>
              <td width="190px">
                <div class="data">
                  <p>31/10/2021</p>
                  <img src="~/assets/icon/show.svg" alt="">
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "history",
};
</script>

<style scoped>
</style>

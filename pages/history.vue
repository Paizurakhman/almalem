<template>
  <div class="history p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="" />
        <nuxt-link :to="{ name: 'auth-profile' }">Аккаунт</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="" />
        <nuxt-link :to="{ name: 'history' }">Активные заказы</nuxt-link>
      </div>
      <div class="p_title">
        <p>Активные заказы</p>
      </div>
      <div class="table_wrapper" v-if="orderData">
        <table class="table table-bordered table-responsive">
          <thead>
            <tr>
              <th scope="col"><p style="width: 100px;">Номер заказа</p></th>
              <th scope="col"><p style="width: 200px;">Наименование</p></th>
              <th scope="col"><p style="width: 100px;">Кол-во</p></th>
              <th scope="col"><p style="width: 100px;">Цена</p></th>
              <th scope="col"><p style="width: 100px;">Статус заказа</p></th>
              <th scope="col"><p style="width: 100px;">Дата</p></th>
            </tr>
          </thead>
          <tbody>
            <tr height="100px" v-for="(order, index) in orderData.orders">
              <td v-for="item in order.products">{{item.artikul}}</td>
<!--              <td scope="row" width="190px">{{order.products}}</td>-->
              <td width="550px" v-for="item in order.products" >
                <div class="my_order_name">
                  <img :src="'http://cdn.astudiodigital.ru/' + item.image.image" alt="">
                  <p>{{item.title}}</p>
                </div>
              </td>
              <td width="190px" v-for="item in order.products">{{ item.count }} шт</td>
              <td width="190px" v-for="item in order.products">{{ item.price }} ₸</td>
              <td width="190px">{{ order.type_status }}</td>
              <td width="190px">
                <p>{{ new Date(order.created_at).getDate() }}/{{ new Date(order.created_at).getMonth() }}/{{ new Date(order.created_at).getFullYear() }}</p>
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
  data() {
    return {
      orderData: null
    }
  },
  async mounted() {
    await this.$axios.$post('user-orders?token=' + localStorage.getItem('token'))
    .then(res => {
      this.orderData = res
    })
  }
};
</script>

<style scoped>
</style>

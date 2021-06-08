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
        <p>{{ locale[this.$store.state.lang].contentTitle.activeOrder}}</p>
      </div>
      <div class="table_wrapper" v-if="orderData">
        <div v-if="orderData.orders.length">
          <table class="table table-bordered table-responsive">
            <thead>
            <tr>
              <th scope="col"><p style="width: 100px;">{{ locale[this.$store.state.lang].tableMyOrders.orderId}}</p></th>
              <th scope="col"><p style="width: 200px;">{{ locale[this.$store.state.lang].tableMyOrders.name}}</p></th>
              <th scope="col"><p style="width: 100px;">{{ locale[this.$store.state.lang].tableMyOrders.priceText}}</p></th>
              <th scope="col"><p style="width: 100px;">{{ locale[this.$store.state.lang].tableMyOrders.statusOrder}}</p></th>
              <th scope="col"><p style="width: 100px;">{{ locale[this.$store.state.lang].tableMyOrders.dataOrder}}</p></th>
            </tr>
            </thead>
            <tbody>
            <tr height="100px" v-for="(order, index) in orderData.orders">
              <td>{{ order.id }}</td>
              <td width="550px" >
                <div class="my_order_name">
                  <img :src="'http://cdn.astudiodigital.ru/' + order.products[0].image.image" alt="">
                  <p>{{order.products[0].title}}</p>
                </div>
              </td>
              <td width="190px">{{ totalPrice }} ₸</td>
              <td width="190px">{{ order.type_status }}</td>
              <td width="190px">
                <p>{{ new Date(order.created_at).getDate() }}/{{ new Date(order.created_at).getMonth() }}/{{ new Date(order.created_at).getFullYear() }}</p>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          {{ locale[this.$store.state.lang].message.myOrder }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {locale} from "../middleware/localeLang";
export default {
  name: "history",
  data() {
    return {
      locale: locale,
      orderData: null
    }
  },
  computed: {
    totalPrice() {
      let price = [];
      this.orderData.orders.filter(el => {
        el.products.forEach(val => {
          price.push(val.price)
        })
      })
      if (price.length) {
        price = price.reduce((sum, end) => {
          return sum + end
        })
      }
      return price
    }
  },
  async mounted() {
    await this.$axios.$post('user-orders?token=' + localStorage.getItem('token'))
    .then(res => {
      this.orderData = res
      this.totalPrice
    })
  }
};
</script>

<style scoped>
</style>

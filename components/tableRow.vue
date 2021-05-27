<template>
    <tr height="100px" >
      <th scope="row" width="190px">
        <div class="table_img">
          <img :src="'http://cdn.astudiodigital.ru/' + product.images.image" alt="">
        </div>
      </th>
      <td width="440px">{{ product.title }}</td>
      <td width="190px">
        <div class="amount">
          <input type="text" v-model="count" @change="counter(product.id)">
          <div class="clear">
            <img src="~/assets/icon/clear_red.svg" alt="">
          </div>
        </div>
      </td>
      <td width="190px">
        <p class="t_price price">{{ product.price }} ₸ <span class="old_price">2400 ₸</span></p>
      </td>
      <td width="190px">
        <div class="table_action">
          <p class="t_price price">{{ singleProdTotalPrice[index].t_price }} ₸</p>
          <img @click="deleteCart(product.id)" class="delete" src="~/assets/icon/clear.svg" alt="">
        </div>
      </td>
    </tr>
</template>

<script>
export default {
  name: "tableRow",
  props: ['product', 'products', 'index'],
  data() {
    return {
      count: 1,
      cart: null
    }
  },
  methods: {
    deleteCart(id) {
      this.$emit('deleteCartProduct', id)
    },
    counter (id) {
      if (this.count) {
        this.cart.filter(v => {
          if (v.id === id) {
            v.count = Number(this.count)
          }
        })
        localStorage.setItem('cart', JSON.stringify(this.cart))
      }
    }
  },
  computed: {
    singleProdTotalPrice() {
      this.cart = JSON.parse(localStorage.getItem('cart'))
      let price = []
      for (const i of this.cart) {
        this.products.filter(elem => {
          if (i.id === elem.id) {
            price.push({
              p_id: elem.id,
              t_price: elem.price * i.count
            })
          }
        })
      }
      price.sort((a, b) => {
        return a.p_id - b.p_id
      })
      return price
    }
  },
}
</script>

<style scoped>

</style>

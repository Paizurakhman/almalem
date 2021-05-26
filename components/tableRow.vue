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
          <input type="text" v-model="count">
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
          <p class="t_price price">1400 ₸</p>
          <img @click="deleteCart(product.id)" class="delete" src="~/assets/icon/clear.svg" alt="">
        </div>
      </td>
    </tr>
</template>

<script>
export default {
  name: "tableRow",
  props: ['product'],
  data() {
    return {
      count: 1
    }
  },
  methods: {
    deleteCart(id) {
      this.$emit('deleteCartProduct', id)
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <tr height="100px">
    <th scope="row" width="190px">
      <div class="table_img">
        <img
          :src="'http://cdn.astudiodigital.ru/' + product.images.image"
          alt=""
        />
      </div>
    </th>
    <td width="440px">{{ product.title }}</td>
    <td width="190px">
      <div class="amount">
        <input type="number" v-model="count" @change="counter(product.id)" ref="inputVal"/>
        <div class="clear" @click="clearCount(product.id)">
          <img src="~/assets/icon/clear_red.svg" alt="" />
        </div>
      </div>
    </td>
    <td width="190px">
      <p class="t_price price">
        {{ product.price }} ₸ <span class="old_price" v-if="product.sale > 0">{{ product.price + (product.price * product.sale / 100) }} ₸</span>
      </p>
    </td>
    <td width="190px">
      <div class="table_action">
        <p class="t_price price">{{ totalPrice }} ₸</p>
        <img
          @click="deleteCart(product.id)"
          class="delete"
          src="~/assets/icon/clear.svg"
          alt=""
        />
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "tableRow",
  props: ["product", "products", "index"],
  data() {
    return {
      count: 1,
      cart: null,
    };
  },
  methods: {
    deleteCart(id) {
      this.$emit("deleteCartProduct", id);
    },

    counter(id) {
      let localStorageCart = JSON.parse(localStorage.getItem("cart"));

      localStorageCart.filter((item, index) => {
        if (item.id === id) {
          localStorageCart[index].count = this.count;
        }
      });

      localStorage.setItem("cart", JSON.stringify(localStorageCart));
    },

    clearCount(id) {
      this.count = 1;
      this.counter(id)
    },
  },
  computed: {
    totalPrice() {
      return this.product.price * this.count;
    },

    singleProdTotalPrice() {
      this.cart = JSON.parse(localStorage.getItem("cart"));
      let price = [];
      for (const i of this.cart) {
        this.products.filter((elem) => {
          if (i.id === elem.id) {
            price.push({
              p_id: elem.id,
              t_price: elem.price * i.count,
            });
          }
        });
      }
      price.sort((a, b) => {
        return a.p_id - b.p_id;
      });
      return price;
    },
  },

  mounted() {
    let localStorageCart = JSON.parse(localStorage.getItem("cart"));

    localStorageCart.filter((item, index) => {
      if (item.id === this.product.id) {
        this.count = item.count
      }
    });

  },
};
</script>

<style scoped>
</style>

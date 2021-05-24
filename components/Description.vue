<template>
  <div class="description">
    <div class="description_action">
      <button
        class="btn_tab"
        v-for="des in des_rev"
        :key="des.id"
        @click="tabDescription(des.id); current = des.title"
        :class="{ activeDesc: des.id === currId }"
      >{{des.title}}

      </button>
    </div>
    <div class="description_text" v-if="current === 'Описание'">
      <p>{{ description }}</p>
    </div>
    <div class="review_text" v-if="current === 'Отзывы (1)'">
      <div class="all_reviews" v-for="review in reviews" :key="review.review_id">
        <div class="review_header">
          <div class="row">
            <div class="col-xl-6 pr-0 col-6">
              <p>{{ review.name }}</p>
            </div>
            <div class="col-xl-6 col-6 pl-0 ta_right">
              <p>{{ review.created_at }}</p>
            </div>
          </div>
        </div>
        <div class="review1_text">
          <p>{{ review.review }}</p>
          <no-ssr>
            <star-rating v-model="rating"></star-rating>
          </no-ssr>
        </div>
      </div>
      <div class="contacts_form">
        <div class="contacts_title">
          <p>Оставить отзыв</p>
        </div>
        <div class="form">
          <form action="">
            <div class="inputs">
              <span class="necessarily">Имя</span>
              <input type="text">
            </div>
            <div class="inputs">
              <span class="necessarily">Ваш отзыв</span>
              <textarea></textarea>
            </div>
            <div class="inputs">
              <span class="necessarily">Рейтинг</span>
              <p>*****</p>
            </div>
            <div class="contacts_action">
              <button class="btn btn_silver">Продолжить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Description",
  props: ['description', 'reviews'],
  data() {
    return {
      rating: 3,
      currId: 1,
      current: 'Описание',
      des_rev: [
        {
          id: 1,
          title: 'Описание'
        },
        {
          id: 2,
          title: 'Отзывы (1)'
        },
      ]
    }
  },
  methods: {
    tabDescription(id) {
      this.currId = id
    }
  }
}
</script>

<style scoped>

</style>

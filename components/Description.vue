<template>
  <div class="description">
    <div class="description_action">
      <button
        class="btn_tab"
        @click="tabDescription('opisanie')"
        :class="{ activeDesc: current === 'opisanie' }"
      >
        {{ locale[this.$store.state.lang].buttons.description }}
      </button>
      <button
        class="btn_tab"
        @click="tabDescription('otziv')"
        :class="{ activeDesc: current === 'otziv' }"
      >
        {{ locale[this.$store.state.lang].buttons.review }} ({{reviews.length}})
      </button>
    </div>
    <div class="description_text" v-if="current === 'opisanie'">
      <p>{{ description }}</p>
    </div>
    <div class="review_text" v-if="current === 'otziv'">
      <div class="all_reviews" v-for="review in reviews" :key="review.review_id">
        <div class="review_header">
          <div class="row">
            <div class="col-xl-6 pr-0 col-6">
              <p>{{ review.name }}</p>
            </div>
            <div class="col-xl-6 col-6 pl-0 ta_right">
              <p>{{ new Date(review.created_at).getDate() }}/{{ new Date(review.created_at).getMonth() }}/{{ new Date(review.created_at).getFullYear() }}</p>
            </div>
          </div>
        </div>
        <div class="review1_text">
          <p>{{ review.review }}</p>
          <no-ssr>
            <star-rating
              v-model="review.rating"
              v-bind="settings"
              :read-only="true"
            >
            </star-rating>
          </no-ssr>
        </div>
      </div>
      <div class="contacts_form">
        <div class="contacts_title">
          <p>{{ locale[this.$store.state.lang].contentTitle.postReview }}</p>
        </div>
        <div class="form">
          <form @submit.prevent="sendReview">
            <div class="inputs">
              <span class="necessarily custom_span">{{ locale[this.$store.state.lang].form.nameText }}</span>
              <input class="custom_input" type="text" v-model="name" :class="{invalid:($v.name.$dirty && !$v.name.required)
                          || ($v.name.$dirty && !$v.name.minLength)}">
              <span class="error" v-if="$v.name.$dirty && !$v.name.minLength">length</span>
              <span class="error" v-if="$v.name.$dirty && !$v.name.required">required</span>
            </div>
            <div class="inputs">
              <span class="necessarily custom_span">{{ locale[this.$store.state.lang].form.review }}</span>
              <textarea v-model="review_text" :class="{invalid:($v.review_text.$dirty && !$v.review_text.required)}"></textarea>
              <span class="error" v-if="$v.review_text.$dirty && !$v.review_text.required">required</span>
            </div>
            <div>
              <div class="inputs">
                <span class="necessarily custom_span">Рейтинг</span>
                <no-ssr>
                  <star-rating v-model="rating" v-bind="settings"></star-rating>
                </no-ssr>
              </div>
            </div>
            <div class="contacts_action">
              <button class="btn btn_silver">{{ locale[this.$store.state.lang].buttons.continue }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {locale} from "../middleware/localeLang";
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: "Description",
  props: ['description', 'reviews', 'product_id'],
  data() {
    return {
      locale: locale,
      rating: 0,
      currId: 1,
      current: 'opisanie',
      name: '',
      review_text: '',
      settings: {
        'star-size': 15,
        'show-rating': false,
        'active-color': '#757575',
        'inactive-color': '#CCCCCC',
        'rounded-corners': true,
        'padding': 10,
        'border-width': 1,
        'star-points': [23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]
      }
    }
  },
  methods: {
    tabDescription(by) {
      this.current = by
    },
    async sendReview () {
      this.$v.$touch();
      if(!this.$v.$invalid) {
        await this.$axios.post('review', {
          name: this.name,
          review: this.review_text,
          rating: this.rating,
          product_id: this.product_id
        })
          .then(res => {
            this.reviews = res.data.reviews
            this.name = ''
            this.review_text = ''
            this.rating = 0
          })
      }
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(3)
    },
    review_text: {
      required
    }
  }
}
</script>

<style scoped>

</style>

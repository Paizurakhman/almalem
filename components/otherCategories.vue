<template>
  <div class="other_categories">
    <div class="container">
      <div class="page_title">
        <p>{{ locale[this.$store.state.lang].contentTitle.otherCategory }}</p>
      </div>
      <div class="other_categories_content">
        <div class="row">
          <div class="col-xl-4 col-lg-4 border_color" v-for="o in other" :key="o.id">
            <div class="categories_card h-100">
              <div class="row align-items-center h-100">
                <div class="col-xl-5 col-lg-5 col-5">
                  <div class="categories_img" v-if="o.image">
                    <img :src="'http://cdn.astudiodigital.ru/' + o.image" alt="">
                  </div>
                </div>
                <div class="col-xl-7 col-lg-7 col-7 h-100">
                  <div class="card_items h-100">
                    <div>
                      <div class="category_name">
                      <p>{{ o.title }}</p>
                    </div>
                    <div class="category_title">
                      <p v-for="item in o.subcategories" :key="item.id">{{item.title}}</p>
                    </div>
                    </div>
                    <nuxt-link :to="{
                        name: 'catalog-slug',
                        params: {
                          slug: o.slug
                        }
                      }">
                    <div class="watch_now">

                        <p>{{ locale[GET_LANG].buttons.view_now }}</p>

                      <div class="arrow">
                        <img src="~/assets/icon/main/arrow.svg" alt="">
                      </div>
                    </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {locale} from "../middleware/localeLang";
import { mapGetters } from 'vuex'
export default {
  name: "otherCategories",
  props: ['other'],
  data() {
    return {
      locale: locale
    }
  },
  computed: {
    ...mapGetters([
      'GET_LANG'
    ])
  }
}
</script>

<style scoped>

</style>

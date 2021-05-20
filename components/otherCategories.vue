<template>
  <div class="other_categories">
    <div class="container">
      <div class="page_title">
        <p>Другие категории</p>
      </div>
      <div class="other_categories_content">
        <div class="row">
          <div class="col-xl-4 col-lg-4 border_color" v-for="o in other" :key="o.id">
            <div class="categories_card">
              <div class="row align-items-center">
                <div class="col-xl-5 col-lg-5 col-5">
                  <div class="categories_img">
                    <img src="~/assets/img/motor.png" alt="">
                  </div>
                </div>
                <div class="col-xl-7 col-lg-7 col-7">
                  <div class="category_name">
                    <p>Теплотехника, энергетика</p>
                  </div>
                  <div class="category_title">
                    <p v-for="item in o.subcategories" :key="item.id">{{item.title}}</p>
                  </div>
                  <div class="watch_now">
                    <p>Смотреть сейчас</p>
                    <div class="arrow">
                      <img src="~/assets/icon/main/arrow.svg" alt="">
                    </div>
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
export default {
  name: "otherCategories",
  props: ['other']
}
</script>

<style scoped>

</style>

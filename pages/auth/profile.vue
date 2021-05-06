<template>
  <div class="profile p_page">
    <div class="container">
      <div class="page_links">
        <nuxt-link to="/">Главная</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/profile">Аккаунт</nuxt-link>
        <img src="~/assets/icon/arrow_silver.svg" alt="">
        <nuxt-link to="/auth/profile">Профиль</nuxt-link>
      </div>
      <div class="p_title">
        <p>Мой аккаунт <span>Изменить информацию</span></p>
      </div>
      <div class="login_content">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="contact_info">
              <div class="c_title">
                <p class="b_text">Имя <span class="b_text">Фамилия</span></p>
                <p class="silver_text">Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Ut felis magna tristique non ipsum donec.
                  Proin aenean sed placerat ut.</p>
              </div>
              <div class="c_title">
                <p class="b_text">Компания</p>
                <p class="b_text">+7 (777) 777-77-77</p>
                <p class="b_text">almalem@gmail.com</p>
              </div>
            </div>
          </div>

          <div class="col-xl-6 col-lg-6">
            <div class="address_card">
              <div class="card_title">
                <p>Заказы</p>
              </div>
              <div class="action_auth">
                <div class="row">
                  <div class="col-xl-6 col-lg-6">
                    <p class="silver_text">Активные заказы</p>
                    <button class="w-100 btn btn_main b_r">Смотреть</button>
                  </div>
                  <div class="col-xl-6 col-lg-6">
                    <p class="silver_text">История заказов</p>
                    <button class="w-100 btn btn_silver">Смотреть</button>
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
  name: "profile"
}
</script>

<style scoped>

</style>

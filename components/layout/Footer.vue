<template>
  <footer>
    <div class="container">
      <div class="footer">
        <div class="row">
          <div class="col-xl-5 col-lg-4 order_2">
            <div class="logo">
              <img src="~/assets/icon/main/logo_footer.svg" alt="">
            </div>
            <div class="footer_title">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et, gravida enim arcu, amet semper.</p>
            </div>
            <div class="address">
              <div class="footer_info">
                <p><span class="bolder_text">Адрес</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="help">
              <div class="footer_info">
                <p><span class="bolder_text">Нужна помощь?</span>+7(777)777-77-77</p>
              </div>
            </div>
          </div>
          <div class="col-xl-7 col-lg-8 order_1">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-3">
                <div class="information">
                  <div class="footer_info">
                    <p class="bolder_text mb-4">Информация</p>
                  </div>
                  <div class="footer_links">
                    <ul>
                      <li>
                        <nuxt-link to="/about">О компании</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/oplata-i-dostavka">Оплата и доставка</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/contacts">Контакты</nuxt-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-3">
                <div class="information">
                  <div class="footer_info">
                    <p class="bolder_text mb-4">Экстра</p>
                  </div>
                  <div class="footer_links">
                    <ul>
                      <li>
                        <nuxt-link to="/catalog">Каталог</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/brands">Бренды</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/">Новинки</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/">Скидки</nuxt-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-7 col-lg-6 col-md-6">
                <div class="account">
                  <div class="footer_info">
                    <p class="bolder_text mb-4">Мой аккаунт</p>
                  </div>
                  <div class="footer_text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <button class="btn btn_main">Смотреть</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copy_right">
        <p>Copyright Almalem © 2021 Разработка сайта от Studio Nomad</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>

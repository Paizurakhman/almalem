<template>
    <div class="checkout p_page">
        <div class="container">
            <div class="page_links">
                <nuxt-link to="/">Главная</nuxt-link>
                <img src="~/assets/icon/arrow_silver.svg" alt="" />
                <nuxt-link to="/cart">Корзина</nuxt-link>
                <img src="~/assets/icon/arrow_silver.svg" alt="" />
                <nuxt-link to="checkout">Оформление заказа</nuxt-link>
            </div>
            <div class="p_title">
                <p>Оформление заказа</p>
            </div>

            <div class="checkout_content">
                <div class="contacts_form">
                    <div class="form">
                        <form action="">
                            <div class="inputs">
                                <div class="row">
                                    <div class="col-xl-7">
                                        <div class="input_title">
                                            <p>Контактные данные</p>
                                        </div>
                                        <div class="row">
                                                <div class="col-xl-4">
                                                    <input type="text" placeholder="Имя и фамилия">
                                                </div>
                                                <div class="col-xl-4">
                                                    <the-mask :mask="['#(###) ###-####']" placeholder="Номер телефона"/>
                                                </div>
                                                <div class="col-xl-4">
                                                    <input type="email" placeholder="E-mail">
                                                </div>
                                            </div>
                                        <div class="input_title">
                                            <p>Доставка</p>
                                        </div>
                                        <div class="i_title">
                                            <p>Адрес</p>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-4">
                                                <vue-picker v-model="city" autofocus placeholder="Регион">
                                                    <vue-picker-option value="1">Almaty</vue-picker-option>
                                                </vue-picker>
                                            </div>
                                            <div class="col-xl-4">
                                                <vue-picker v-model="city" autofocus placeholder="Город">
                                                    <vue-picker-option value="1">Almaty</vue-picker-option>
                                                </vue-picker>
                                            </div>
                                            <div class="col-xl-4">
                                                <input type="email" placeholder="Улица">                                                </div>
                                        </div>
                                        <div class="row">
                                            <div class="home_address">
                                                <input type="text" placeholder="Дом">
                                                <input type="text" placeholder="Корпус">
                                                <input type="text" placeholder="Подъезд">
                                                <input type="text" placeholder="Этаж">
                                                <input type="text" placeholder="Квартира">
                                            </div>
                                        </div>
                                        <div class="i_title">
                                            <p>Комментарии к заказу</p>
                                        </div>
                                        <textarea placeholder="Комментарии"></textarea>
                                    </div>
                                    <div class="col-xl-5">
                                        <div class="input_title">
                                            <p>Ваш заказ</p>
                                        </div>
                                        <div class="address_card">
                                            <div class="ordering_card">
                                                <div class="row">
                                                    <div class="col-xl-3">
                                                        <img src="~/assets/img/motor.png" alt="">
                                                    </div>
                                                    <div class="col-xl-5">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    </div>
                                                    <div class="col-xl-2">
                                                        <div class="item_amount">
                                                            <p class="count">1 шт</p>
                                                        <p class="price">1400₸</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-2">
                                                        <div class="table_wrapper">
                                                            <div class="table_action">
                                                                <img class="delete" src="~/assets/icon/clear.svg" alt="">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ordering_card">
                                                <div class="row">
                                                    <div class="col-xl-3">
                                                        <img src="~/assets/img/product.png" alt="">
                                                    </div>
                                                    <div class="col-xl-5">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    </div>
                                                    <div class="col-xl-2">
                                                        <div class="item_amount">
                                                            <p class="count">1 шт</p>
                                                        <p class="price">1400₸</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-2">
                                                        <div class="table_wrapper">
                                                            <div class="table_action">
                                                                <img class="delete" src="~/assets/icon/clear.svg" alt="">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card_footer">
                                            <div class="sum">
                                                <p>Итого: <span class="b_text">1400 ₸</span></p>
                                            </div>
                                            <div class="action">
                                                <button class="btn btn_main">Перейти к оплате</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'checkout',
    data() {
        return {
            city: ''
        }
    }
}
</script>

<style>

</style>
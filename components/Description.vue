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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit dignissim pretium, lobortis urna diam sed donec sit.
        Ut fringilla vivamus accumsan, nec adipiscing sed eget. Sed ullamcorper ornare duis id commodo est. Felis ultrices aenean aliquam enim aliquam ornare et dolor.
        Nunc, semper pharetra tristique volutpat. Ut condimentum ridiculus netus sit lorem a fames tortor. Est arcu vitae diam odio fringilla egestas lacinia fermentum.
        Vulputate quam vitae in sit interdum metus nibh purus. Tempus velit elementum egestas fermentum eu consectetur nisl nisi duis.
      </p>
    </div>
    <div class="review_text" v-if="current === 'Отзывы (1)'">
      <div class="review_header">
        <div class="row">
          <div class="col-xl-6 pr-0 col-6">
            <p>Name</p>
          </div>
          <div class="col-xl-6 col-6 pl-0 ta_right">
            <p>05/10/2018</p>
          </div>
        </div>
      </div>
      <div class="review1_text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet tristique luctus etiam libero in. Tristique amet orci faucibus a sagittis egestas facilisis sed leo.
          Turpis eu cursus sagittis nunc, porta. Eu mollis diam rhoncus vehicula sed sagittis donec ornare nibh.
          Leo, morbi arcu, ipsum, nunc, mauris maecenas laoreet feugiat mattis. Mus arcu magna bibendum quis donec
          libero ultricies magna porttitor. Fermentum vel, nec facilisi ac odio est consequat lacus.
          Lacus faucibus eget amet non mi diam. Laoreet sed mauris amet et consequat vehicula.</p>
        <p class="mb-0">*****</p>
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
  data() {
    return {
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

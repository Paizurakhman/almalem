<template>
  <div class="language_nav">
    <div class="nav_container">
      <div
        v-for="lang in language"
        :key="lang.id"
        @click="langHandler(lang)"
        class="language_items"
      >
        <img :src="lang.src" alt="">
        <p>{{ lang.type }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "LanguageNav",
  props: ['language'],
  methods: {
    ...mapActions([
      'languageNavAction'
    ]),
    langHandler(lang) {
      this.languageNavAction()
      this.$emit('changeLang', lang)
    }
  }

}
</script>

<style lang="scss" scoped>
  .language_nav {
    max-width: 150px;
    padding: 0 16px;
    position: absolute;
    right: 0;
    z-index: 1;
    margin-top: 5px;
    background: white;
    .language_items {
      display: flex;
      align-items: center;
      margin: 16px 0;
      cursor: pointer;
      p {
        color: #000000;
        margin-bottom: 0;
        margin-left: 10px;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
</style>

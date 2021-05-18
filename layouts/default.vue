<template>
  <div>
    <LayoutHeader :lang="language"/>
    <Nuxt />
    <LayoutFooter />
  </div>
</template>

<style lang="scss">
  @media screen and (max-width: 1024px){
    body {
      font-size: 14px;
    }
  }
</style>

<script>
export default  {
  data() {
    return {
      language: [
        {id: 1, src: require('~/assets/icon/main/flag_ru.svg'), type: 'Русский'},
        {id: 2, src: require('~/assets/icon/main/flag_kz.svg'), type: 'Казахский'},
      ],
    }
  },
  watch: {
    $route(to, from) {
      if (this.$cookies.get('token_time') !== null) {
        let date = new Date() - (new Date(this.$cookies.get('token_time')))
        let minute = date / 60000

        console.log(minute)
        if (minute > 25) {
          alert('refresh token')
        }
      }
    }
  }
}
</script>

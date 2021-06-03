<template>
  <div class="dropdown">
    <div class="select" ref="select" @click.stop="selectOption">
      <p class="select_text"><slot name="item"></slot></p>
      <i class="fas fa-caret-down"></i>
    </div>
    <div class="options" v-if="hideShow">
      <div class="option" v-for="region in options" :key="region.id" @click="selectRegion(region)">
        {{ region.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props: ['options'],
  data() {
    return {
      hideShow: false,
    }
  },
  methods: {
    selectRegion(region){
      this.$emit('o-select', region)
    },
    selectOption () {
      this.hideShow = !this.hideShow
    }
  },
  mounted() {
    let vm = this
    document.addEventListener('click', function (e) {
      if (vm.$refs.select === e.target) {
        vm.hideShow = true
      }
      else {
        vm.hideShow = false
      }
    })
  }
}
</script>

<style scoped lang="scss">

</style>

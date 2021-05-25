import Vue from 'vue'

Vue.filter('truncate', val => {
  val = val.toString()
  if (val.length >= 48) {
    return val.slice(0, 48) + "..."
  }
  return val
})

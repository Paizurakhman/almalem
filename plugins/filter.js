import Vue from 'vue'

Vue.filter('truncate', value => {
  value = value.toString()
  if (value.length >= 45) {
    return value.slice(0, 45) + "..."
  }
  return value
})

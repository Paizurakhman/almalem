import Vue from 'vue'

Vue.filter('truncate', value => {
  value = value.toString()
  if (value.length >= 48) {
    return value.slice(0, 48) + "..."
  }
  return value
})

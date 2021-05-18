<template>
  <div class="pagination_content">
    <div class="pagination">
      <ul>
        <li class="action_btn prev"><span><img src="~/assets/icon/pagination_next.svg" alt=""></span></li>
        <li class="nums"><span>1</span></li>
        <li class="nums"><span>2</span></li>
        <li class="nums active"><span>3</span></li>
        <li class="action_btn next"><span><img src="~/assets/icon/pagination_next.svg" alt=""></span></li>
      </ul>
    </div>
    <div class="tab_bar_text m_n">
      <p>Показано с 1 по 6 из 6 (1 страниц)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination"
}
</script>

<style lang="scss" scoped>

</style>

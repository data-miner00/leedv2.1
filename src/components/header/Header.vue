<template>
  <div class="header">
    <div class="header-inner">
      <span>{{ currentPage }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentPage() {
      return this.$store.getters.getCurrentPage;
    },
  },
};
</script>

<style lang="sass" scoped>
.header
  height: 53px
  padding: 0 15px
  border-bottom: 1px solid #eee
  display: flex
  align-items: center
  position: sticky
  background: #fff
  top: 0
  z-index: 1

  &-inner
    span
      font-size: 19px
      font-weight: 800
</style>

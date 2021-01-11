<template>
  <div class="misc-title">
    <span>{{ miscTitle }}</span>
  </div>
</template>

<script>
export default {
  props: {
    miscTitle: String,
  },
};
</script>

<style lang="sass" scoped>
.misc-title
  width: 100%

  span
    font-size: 19px
    font-weight: 800
</style>

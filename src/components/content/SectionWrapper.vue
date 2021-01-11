<template>
  <div class="section-wrapper">
    <div class="section-title-wrapper">
      <div class="section-title">
        <span>{{ title }}</span>
      </div>
    </div>
    <div class="content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="sass" scoped>
.section-wrapper
  border-bottom: 1px solid #eee

  .section-title-wrapper
    padding: 0 15px

    .section-title
      font-size: 19px
      font-weight: 700
      color: rgb(121, 75, 196)
      padding: 5px 0

  .content-wrapper
</style>

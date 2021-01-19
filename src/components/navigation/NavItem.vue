<template>
  <div class="nav-item" @click="onclick">
    <v-icon class="icon">{{ navIcon }}</v-icon>

    <div class="label-wrapper">
      <span class="label">{{ labelText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    labelText: String,
    navIcon: String,
    name: String,
  },
};
</script>

<style lang="sass" scoped>
.nav-item
  padding: 10px
  display: flex
  width: fit-content
  border-radius: 50px
  transition: background-color 0.2s
  cursor: pointer

  &:hover
    background-color: #ccc

  .icon
    font-size: 1.875rem

  .label-wrapper
    margin-left: 20px
    margin-right: 15px
    width: fit-content

    .label
      font-size: 19px
      line-height: 1.3125
      font-family: 'Segoe UI', sans-serif
      width: fit-content
      font-weight: 700
</style>

<template>
  <div
    class="nav-item"
    :style="`color: ${isPageSelected ? 'rgb(121, 75, 196)' : 'black'}`"
  >
    <v-icon
      class="icon"
      :color="isPageSelected ? 'rgb(121, 75, 196)' : 'black'"
      >{{ navIcon }}</v-icon
    >

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
  computed: {
    isPageSelected() {
      return this.$store.getters.getCurrentPage == this.labelText;
    },
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
    color: rgb(121, 75, 196)

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

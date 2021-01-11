<template>
  <div
    class="misc-item-wrapper"
    :class="{ 'last-item': last, 'mouse-enter': onmouseenter }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    last: {
      type: Boolean,
      default: () => false,
    },
    onmouseenter: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style lang="sass" scoped>
.misc-item-wrapper
  padding: 10px 15px
  border-bottom: 1px solid #eee

  &.last-item
    border-bottom: none

  &.mouse-enter
    cursor: pointer
    transition: background .2s
    &:hover
      background: #eee
</style>

<!--
    Usage: Must be placed under the page component directly as relative positioning
    is inferred.
-->

<template>
  <div class="go-back" @click="$router.go(-1)">
    <img src="../assets/back.svg" alt="Back Button" />
  </div>
</template>

<style lang="sass" scoped>
.go-back
  position: fixed
  top: 15px
  left: 25px
  opacity: .75
  cursor: pointer
  z-index: 2

  &:hover
    opacity: 0.95

  img
    width: 20px
</style>

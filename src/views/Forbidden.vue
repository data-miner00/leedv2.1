<template>
  <div class="forbidden">
    <div class="wrap">
      <h1>403</h1>
      <p>access not granted</p>
      <router-link to="/">
        <div class="back">back</div>
      </router-link>
    </div>
  </div>
</template>

<script></script>

<style lang="sass" scoped>
@import "../assets/sass/_variables"
.forbidden
  text-align: center
  font-family: $open-sans
  color: $ftheme
  background: $fbg
  height: 100vh
  display: flex
  align-items: center
  justify-content: center
  h1
    font-family: $nova
    font-size: calc(4rem + 2vw)
    text-transform: uppercase
  p
    text-transform: uppercase
    letter-spacing: .2rem
    font-size: 2rem
    margin: 1.5rem 0 3rem
  .back
    font-size: 1.8rem
    text-transform: uppercase
    letter-spacing: .1rem
    color: $fbg
    background: $ftheme
    padding: .3rem .8rem
    cursor: pointer
    transition: background .2s
    &:hover
      background: #e0dbb8
</style>

<template>
  <div class="header">
    <div class="logo">
      <div class="icon">
        <div class="square sq-1"></div>
        <div class="square sq-2"></div>
        <div class="square sq-3"></div>
        <div class="square sq-4"></div>
      </div>
      <div class="brand-title">
        leed
      </div>
    </div>
    <div class="navigation-links">
      <div class="link"><div>About</div></div>
      <div class="link"><div>Help</div></div>
      <div class="link"><div>Contact</div></div>
      <div class="link"><div>Pricing</div></div>
      <div class="link"><div>Login</div></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.header
  height: 64px
  width: 100%
  background: #fdfbfa
  border-bottom: 1px solid #eee
  display: flex
  padding: 0 12.5%
  justify-content: space-between

  .logo
    height: 100%
    display: flex
    align-items: center


    .icon
      display: flex
      justify-content: space-around
      width: 60px
      height: 100%
      margin-right: 15px

      .square
        background: #333332
        width: 10px
        height: 10px
        margin: auto 0

      .sq-1
        border-radius: 5px 0 0 5px
        background: #ffbc57

      .sq-2
        height: 20px
        background: #5357e1

      .sq-3
        height: 20px
        background: #ff6b3f

      .sq-4
        border-radius: 0 5px 5px 0
        background: #41cc9a

    .brand-title
      text-transform: uppercase
      font-size: 28px
      color: #333332
      letter-spacing: 5px
      font-weight: 800

  .navigation-links
    display: flex
    justify-content: space-between
    .link
      height: 100%
      padding: 0 25px
      font-size: 19px
      display: grid
      place-items: center
      &:hover
        color: #33ff3e
</style>

<style lang="sass" scoped>
a
  color: inherit
  text-decoration: none
</style>

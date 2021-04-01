<template>
  <div class="home">
    <div class="section-divider"></div>
    <div class="welcome-blade">
      <div class="big">Welcome</div>
      <div class="small">
        Good to see you <strong>{{ name }}</strong
        >, more is coming on the home page! exercitationem facere voluptate
        harum quia ipsam quos quisquam. Here is what you can do.
        <span>Explore more</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$store.state.user.name;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/_variables"
.welcome-blade
  max-width: 689px
  padding: 200px 100px
  border-bottom: 1px solid #eee
  .big
    font-size: 2rem
    font-weight: 700
    color: $color2
    text-transform: uppercase
    text-align: center

  .small
    span
      color: $color2
      text-decoration: underline
</style>

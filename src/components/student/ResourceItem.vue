<template lang="pug">
  .resource-item
    .category-title {{ title }}
    .links
      .link(v-for="website in websites" :key="Math.random()")
        a(:href="website.url" target="_blank")
          font-awesome-icon(:icon="['fab', website.icon]")/
</template>

<script>
export default {
  props: {
    title: String,
    websites: Array,
  },
};
</script>

<style lang="sass" scoped>
.category-title
  text-align: center
  padding: 10px 0
  font-weight: 800
  font-size: 19px
  border-bottom: 1px solid #eee

.links
  padding: 30px 15px
  display: flex
  font-size: 30px
  flex-wrap: wrap
  border-bottom: 1px solid #eee
  justify-content: center
  .link
    margin: 0 10px

    a
      color: inherit
      padding: 20px
</style>

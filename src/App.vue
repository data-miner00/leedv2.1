<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<!-- Global Styling -->
<style lang="sass">
.section-divider
  background: #f7f9fa
  height: 10px
  border-bottom: 1px solid #eee

.page-description
  padding: 15px
  border-bottom: 1px solid #eee
  max-width: 689px

textarea
  outline: none
</style>

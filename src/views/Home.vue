<template>
  <div class="home">
    <Header />
    <!-- mdi-open-in-new -->
    <div class="content"></div>
  </div>
</template>

<script>
import Header from "@/components/header/MainHeader.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>

<style lang="sass" scoped>
.home
  height: 100%
  width: 100%
  .content
    height: 100%
    width: 100%
</style>

<template>
  <v-main class="wrapper">
    <div class="user-layout">
      <Navbar :tabs="tabs" />
      <!-- To serves as a placeholder for the floating nav -->
      <div class="invisi-nav"></div>
      <div class="main-content">
        <Header />
        <router-view></router-view>
      </div>
      <!-- To serves as a placeholder for the floating misc -->
      <div class="invisi-misc"></div>
      <slot></slot>
    </div>
  </v-main>
</template>

<script>
import Navbar from "../navigation/Navbar";
import Header from "../header/Header";

export default {
  components: { Navbar, Header },
  props: {
    tabs: Array,
  },
};
</script>

<style lang="sass" scoped>
.wrapper
  margin: 0 auto
  position: relative

.user-layout
  display: flex
  flex-direction: row
  width: 70vw

.main-content
  border-left: 1px solid #eee
  border-right: 1px solid #eee
  flex-grow: 1
  min-height: 100vh

.invisi-nav
  width: 275px

.invisi-misc
  width: 378px
</style>

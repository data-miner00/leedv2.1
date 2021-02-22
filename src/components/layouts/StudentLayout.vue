<template>
  <v-main class="wrapper">
    <div class="user-layout">
      <Navbar />
      <!-- To serves as a placeholder for the floating nav -->
      <div class="invisi-nav"></div>
      <div class="main-content">
        <Header />
        <router-view></router-view>
      </div>
      <!-- To serves as a placeholder for the floating misc -->
      <div class="invisi-misc"></div>
      <MiscPanel />
    </div>
  </v-main>
</template>

<script>
import Navbar from "../navigation/Navbar";
import Header from "../header/Header";
import MiscPanel from "../miscellaneous/MiscPanel";

export default {
  components: { Navbar, Header, MiscPanel },
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

.invisi-nav
  width: 275px

.invisi-misc
  width: 378px
</style>

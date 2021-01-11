<template>
  <v-main class="wrapper">
    <div class="user-layout">
      <Navbar />
      <div class="main-content">
        <Header />
        <slot></slot>
      </div>
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
  padding: 0 10px

.user-layout
  display: flex
  flex-direction: row
  height: 100vh
  width: 70vw

.main-content
  border-left: 1px solid #eee
  border-right: 1px solid #eee
  flex-grow: 1
</style>

<template>
  <div class="misc-panel">
    <TimeCard />
    <QuickLinks />
    <Footer />
  </div>
</template>

<script>
import TimeCard from "./TimeCard";
import QuickLinks from "./QuickLinks";
import Footer from "../footer/Footer";
export default {
  components: {
    TimeCard,
    QuickLinks,
    Footer,
  },
};
</script>

<style lang="sass" scoped>
.misc-panel
  width: 378px
  padding-left: 30px
  position: fixed
  top: 0
  right: 275px

@media only screen and (max-width: 1800px)
  .misc-panel
    display: none
</style>

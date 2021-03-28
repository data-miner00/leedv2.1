<template lang="pug">
  .home
      .page-description 
        | Currently, there is not much happening on the home page, but more is coming
        | on the upcoming update!
      .section-divider
      .welcome-blade
        
</template>

<script>
import { randomChoice } from "@/utils";
import axios from "axios";
import fs from "fs";
export default {
  methods: {
    request() {
      axios;
      fs;
    },
  },
  computed: {
    username() {
      return this.$store.state.user.name;
    },
    welcomeMsg() {
      return randomChoice([
        `Welcome ${this.username}, what would you like to do?`,
        `Good to see you ${this.username}. Start off your day by selecting some actions beside!`,
      ]);
    },
  },
};
</script>

<style lang="sass" scoped></style>

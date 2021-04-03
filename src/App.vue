<template>
  <v-app>
    <!-- Global Snackbar -->
    <v-snackbar v-model="show" :color="color" outlined>
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn :color="color" text v-bind="attrs" @click="show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <!-- Entry Point -->
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    show: false,
    text: "A friendly notifier",
    color: "rgb(121, 75, 196)",
  }),
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "showMessage") {
        this.text = state.snackbar.text;
        this.color = state.snackbar.color;
        this.show = true;
      }
    });
  },
};
</script>

<!-- Global Styling -->
<style lang="sass">
@import "./assets/sass/fairshare"
</style>

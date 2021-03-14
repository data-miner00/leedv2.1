<template lang="pug">
  v-main.wrapper
    UserLayout(:tabs="tabs")
      MiscPanel/
</template>

<script>
import UserLayout from "./UserLayout";
import MiscPanel from "../miscellaneous/MiscPanel";

export default {
  components: { UserLayout, MiscPanel },
  data: () => ({
    tabs: [
      { title: "Home", icon: "mdi-home-outline", to: "home" },
      { title: "Notification", icon: "mdi-bell-outline", to: "notification" },
      {
        title: "Assignments",
        icon: "mdi-archive-alert-outline",
        to: "assignments",
      },
      // {
      //   title: "Announcements",
      //   icon: "mdi-chart-box-outline",
      //   to: "announcements",
      // },
      { title: "Courses", icon: "mdi-school-outline", to: "courses" },
      {
        title: "Resources",
        icon: "mdi-format-quote-open-outline",
        to: "resources",
      },
      { title: "People", icon: "mdi-account-star-outline", to: "people" },
      { title: "More", icon: "mdi-dots-horizontal-circle-outline", to: "/" },
    ],
  }),
};
</script>

<style lang="sass" scoped>
.wrapper
  margin: 0 auto
  position: relative
</style>

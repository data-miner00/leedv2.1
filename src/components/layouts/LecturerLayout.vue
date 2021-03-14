<template lang="pug">
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
      {
        title: "Analytics",
        icon: "mdi-chart-box-outline",
        to: "analytics",
      },
      { title: "Courses", icon: "mdi-school-outline", to: "courses" },
    ],
  }),
};
</script>

<style lang="sass" scoped></style>

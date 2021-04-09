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
      { title: "Home", icon: "mdi-home-outline", to: "/l/home" },
      {
        title: "Notification",
        icon: "mdi-bell-outline",
        to: "/l/notification",
      },
      {
        title: "Assignments",
        icon: "mdi-archive-alert-outline",
        to: "/l/assignments",
      },
      {
        title: "Analytics",
        icon: "mdi-finance",
        to: "/l/analytics",
      },
      { title: "Courses", icon: "mdi-school-outline", to: "/l/courses" },
      { title: "More", icon: "mdi-dots-horizontal-circle-outline", to: "/" },
    ],
  }),
};
</script>

<style lang="sass" scoped></style>

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
      { title: "Home", icon: "mdi-home-outline", to: "/s/home" },
      {
        title: "Notification",
        icon: "mdi-bell-outline",
        to: "/s/notification",
      },
      {
        title: "Assignments",
        icon: "mdi-archive-alert-outline",
        to: "/s/assignments",
      },
      // {
      //   title: "Announcements",
      //   icon: "mdi-chart-box-outline",
      //   to: "announcements",
      // },
      { title: "Courses", icon: "mdi-school-outline", to: "/s/courses" },
      {
        title: "Resources",
        icon: "mdi-format-quote-open-outline",
        to: "/s/resources",
      },
      { title: "More", icon: "mdi-dots-horizontal-circle-outline", to: "/" },
    ],
  }),
};
</script>

<style lang="sass" scoped></style>

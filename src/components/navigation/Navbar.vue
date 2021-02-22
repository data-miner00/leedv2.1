<template>
  <header>
    <div class="nav-links">
      <NavItemWrapper>
        <LogoItem>
          <v-img src="../../assets/logox.png" height="35" width="35"></v-img>
        </LogoItem>
      </NavItemWrapper>
      <NavItemWrapper v-for="(tab, index) in tabs" :key="index">
        <router-link :to="tab.to" @click.native="setHeader(tab.title)">
          <NavItem
            :labelText="tab.title"
            :navIcon="tab.icon"
            :name="tab.title"
          />
        </router-link>
      </NavItemWrapper>
    </div>
    <UserPanel />
  </header>
</template>

<script>
import NavItemWrapper from "./NavItemWrapper";
import NavItem from "./NavItem";
import LogoItem from "./LogoItem";
import UserPanel from "./UserPanel";
export default {
  components: {
    NavItem,
    NavItemWrapper,
    LogoItem,
    UserPanel,
  },
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
  methods: {
    setHeader(newPage) {
      this.$store.commit("setCurrentPage", newPage);
    },
  },
};
</script>

<style lang="sass" scoped>
header
  width: 275px
  padding: 0 10px
  display: flex
  flex-direction: column
  height: 100%
  justify-content: space-between
  position: fixed
  top: 0

a
  text-decoration: none
  color: black
</style>

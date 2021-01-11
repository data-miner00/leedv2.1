<template>
  <header>
    <div class="nav-links">
      <NavItemWrapper>
        <LogoItem>
          <v-img src="../../assets/logox.png" height="35" width="35"></v-img>
        </LogoItem>
      </NavItemWrapper>
      <NavItemWrapper v-for="(tab, index) in tabs" :key="index">
        <NavItem :labelText="tab.title" :navIcon="tab.icon" />
      </NavItemWrapper>
    </div>
    <UserPanel userName="John Mum Khong" userId="1803151" />
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
      { title: "Home", icon: "mdi-home-outline" },
      { title: "Notification", icon: "mdi-bell-outline" },
      { title: "Assignments", icon: "mdi-archive-alert-outline" },
      { title: "Announcements", icon: "mdi-chart-box-outline" },
      { title: "Courses", icon: "mdi-school-outline" },
      { title: "Resources", icon: "mdi-format-quote-open-outline" },
      { title: "People", icon: "mdi-account-star-outline" },
    ],
  }),
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
</style>

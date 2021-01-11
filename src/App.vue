<template>
  <v-app>
    <UserLayout>
      <router-view></router-view>
    </UserLayout>
  </v-app>
</template>

<script>
import UserLayout from "@/components/layouts/UserLayout.vue";
export default {
  name: "App",

  components: { UserLayout },

  data: () => ({
    //
  }),
};
</script>

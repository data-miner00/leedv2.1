<template lang="pug">
  .notification
    .page-description
      | Notification keeps you aware of what is happening around you so that 
      | swift response and actions can be taken especially in a timely manner 
      | to get everything sorted out effortlessly. 
    .section-divider
    Loader(v-if="loading")/
    div(v-else)
      .wrapper(v-if="notifications.length == 0") 
        .wrapper-item There are no notifications yet :-)
      NotiItem(
        v-else
        v-for="noti in notifications"
        :key="Math.random()"
        :createdDate="noti.createdDate"
        :createdTime="noti.createdTime"
        :actorId="noti.actor"
        :actorAvatarUri="noti.actorAvatarUri"
        :actorName="noti.actorName"
        :message="noti.message"
        :assignNo="noti.assignNo"
        :subjectCode="noti.subjectCode"
        :type="noti.type"
      )
</template>

<script>
import axios from "axios";

import NotiItem from "@/components/notification/NotiItem";
import Loader from "@/components/Loader";

export default {
  components: { NotiItem, Loader },
  data: () => ({
    loading: true,
    notifications: [],
  }),
  async mounted() {
    try {
      let res = await axios.get(`notifications/${this.userId}`);
      this.notifications = res.data;

      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    userId() {
      return this.$store.state.user.userId;
    },
  },
};
</script>

<style lang="sass" scoped>
.notification
  position: relative

.wrapper
  min-height: 200px
  display: grid
  place-items: center
  border-bottom: 1px solid #eee

  &-item
    width: fit-content
    color: #5B7083
    font-size: 15px
</style>

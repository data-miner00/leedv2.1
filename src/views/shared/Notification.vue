<template lang="pug">
  .notification
    .section-divider
    NotiItem(
      v-if="notifications.length > 0"
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
    .wrapper 
      .wrapper-item There are no notifications yet :-)
</template>

<script>
import NotiItem from "@/components/notification/NotiItem";
import axios from "axios";
export default {
  components: { NotiItem },
  data: () => ({
    notifications: [],
  }),
  async mounted() {
    try {
      let res = await axios.get(`notifications/${this.userId}`);
      this.notifications = res.data;
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

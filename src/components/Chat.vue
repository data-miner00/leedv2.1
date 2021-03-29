<template>
  <div class="chat-item">
    <div class="left">
      <img :src="avatarUri" alt="" class="avatar" />
    </div>
    <div class="right">
      <div class="definition">
        <div class="name">{{ shortenedName }}</div>
        <div class="time">{{ getTimestamp }}</div>
      </div>
      <div class="message">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatarUri: String,
    username: String,
    message: String,
    timestamp: Object,
  },
  methods: {
    timestampGetDateTime({ seconds, nanoseconds }) {
      const today = new Date();
      const date = new Date(seconds * 1e3 + nanoseconds / 1e6);

      const diffTime = Math.abs(today - date);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;

      if (diffDays == 0) {
        return `Today at ${date
          .getHours()
          .toString()
          .padStart(2, "0")}:${date
          .getMinutes()
          .toString()
          .padStart(2, "0")}`;
      } else if (diffDays == 1) {
        return `Yesterday at ${date
          .getHours()
          .toString()
          .padStart(2, "0")}:${date
          .getMinutes()
          .toString()
          .padStart(2, "0")}`;
      } else {
        return `${this.getStringMonth(
          date.getMonth()
        )} ${date.getdate()} at ${date
          .getHours()
          .toString()
          .padStart(2, "0")}:${date
          .getMinutes()
          .toString()
          .padStart(2, "0")}`;
      }
    },
    getStringMonth(index) {
      const months = [
        "January",
        "Febrauary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return months[index];
    },
  },
  computed: {
    getTimestamp() {
      if (this.timestamp) return this.timestampGetDateTime(this.timestamp);
      else {
        const current = new Date();
        const currentHour = current.getHours();
        const currentMinute = current.getMinutes();
        return `Today at ${currentHour
          .toString()
          .padStart(2, "0")}:${currentMinute.toString().padStart(2, "0")}`;
      }
    },
    shortenedName() {
      return this.username.split(" ")[0];
    },
  },
};
</script>

<style lang="sass" scoped>
.chat-item
  display: flex
  margin-bottom: 15px

  .left
    width: 60px

    .avatar
      border-radius: 999px
      width: 40px
      height: 40px

  .right
    width: 80%

    .definition
      display: flex
      align-items: center

      .name
        font-weight: bold

      .time
        font-size: 12px
        color: #bbb
        margin-left: 5px
</style>

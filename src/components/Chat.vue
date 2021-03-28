<template>
  <div class="chat-item">
    <div class="left">
      <img :src="avatarUri" alt="" class="avatar" />
    </div>
    <div class="right">
      <div class="definition">
        <div class="name">{{ userName }}</div>
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
    userName: String,
    message: String,
    timestamp: String,
  },
  computed: {
    getTimestamp() {
      if (this.timestamp) return this.timestamp;
      else {
        const current = new Date();
        const currentHour = current.getHours();
        const currentMinute = current.getMinutes();
        // TODO: Add Pad
        return `Today at ${currentHour
          .toString()
          .padStart(2, "0")}:${currentMinute.toString().padStart(2, "0")}`;
      }
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

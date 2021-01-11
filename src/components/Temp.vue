<template>
  <div class="temp-wrapper">
    <div class="temp">
      <div class="ls">
        <div class="profile-pic-wrapper">
          <img class="profile-pic" :src="avatarUrl" />
        </div>
      </div>
      <div class="rs">
        <div class="thread-info">
          <span>
            <span class="name">{{ username }}</span>
            &nbsp;&nbsp;
            <span class="userid">{{ userid }}</span>
            &nbsp;&nbsp;
            <span>·</span>
            &nbsp;&nbsp;
            <span class="time-elapsed">{{ timeElapsed }}</span>
          </span>
        </div>
        <div class="thread-content">
          {{ threadContent }}
        </div>
        <div class="thread-action">
          <div class="comment">
            <v-icon>mdi-comment-outline</v-icon>
          </div>
          <div class="noted">
            <v-icon>mdi-heart-outline</v-icon>
          </div>
          <div class="pin">
            <v-icon>mdi-pin-outline</v-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatarUrl: String,
    username: String,
    userid: String,
    timeElapsed: String,
    threadContent: String,
  },
};
</script>

<style lang="sass" scoped>
.temp-wrapper
  width: 100%
  padding-top: 10px
  .temp
    padding: 0 15px
    display: flex
    width: 100%
    .ls
      flex-basis: 49px
      margin-right: 10px

      .profile-pic-wrapper
        overflow: hidden
        border-radius: 9999px
        width: 49px
        height: 49px

        .profile-pic
          width: 49px
          height: 49px

    .rs
      flex-grow: 1
      font-size: 15px

      .thread-info
        span
          .name
            font-weight: 700
          .userid
            color: #5b7083
          .time-elapsed
            color: #5b7083

      .thread-content
        min-height: 50px

      .thread-action
        display: flex
        padding: 5px 0
        justify-content: space-between
        width: 70%
</style>

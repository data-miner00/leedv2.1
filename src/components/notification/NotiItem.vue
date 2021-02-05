<template>
  <div class="noti-item-wrapper">
    <div class="noti-item">
      <div class="ls">
        <div class="profile-pic-wrapper">
          <img
            class="profile-pic"
            src="https://pbs.twimg.com/profile_images/1294987365262360576/cufzUZwB_400x400.jpg"
          />
        </div>
      </div>
      <div class="rs">
        <!-- <div class="thread-info">
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
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.noti-item-wrapper
  padding: 10px 0
  .noti-item
    height: 200px
    border-bottom: 1px solid #eee
    padding: 0 15px
    width: 100%
    display: flex

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
      height: 100px
</style>

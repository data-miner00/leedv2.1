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
        <div class="headein">
          <span class="type">[ User Join ]</span> [ 3 March, 2021 ] &mdash;
          20:03
        </div>
        <div class="description">
          A user has joined the gang! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Provident natus possimus iure asperiores eius,
          soluta assumenda, explicabo quidem veniam esse tempora quaerat modi
          eum! Dolorum repellendus odio aspernatur nobis nemo?
          <span class="tag">@1803141</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style lang="sass" scoped>
.noti-item-wrapper
  padding: 10px 0
  border-bottom: 1px solid #eee
  .noti-item

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
      min-height: 80px

.headein
  font-weight: 800
  text-transform: uppercase
  .type
    color: brown
.description
  margin-top: 5px
  max-width: 600px
.tag
  color: #7289da
  padding: 1px 2px
  border-radius: 3px
  background: rgba(114,137,218,0.1)
  transition: all .2s
  cursor: pointer

  &:hover
    color: #fff
    background: #7289da
</style>

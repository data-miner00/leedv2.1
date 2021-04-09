<template>
  <div class="noti-item-wrapper">
    <div class="noti-item">
      <div class="ls">
        <div class="profile-pic-wrapper">
          <img class="profile-pic" :src="actorAvatarUri" />
        </div>
      </div>
      <div class="rs">
        <div class="headein">
          <span class="type">[ {{ typeU }} ]</span> [ {{ createdDate }} ]
          &mdash;
          {{ createdTime }}
        </div>
        <div class="description">
          {{ message }}
          <span class="tag">@{{ actorId }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    createdDate: String,
    createdTime: String,
    actorId: String,
    actorAvatarUri: String,
    actorName: String,
    message: String,
    type: String,
    subjectCode: String,
    assignNo: Number,
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  computed: {
    typeU() {
      let typeDisplay;
      console.log(this.type);
      switch (this.type) {
        case "userJoin":
          typeDisplay = "User Join";
          break;
        case "groupJoin":
          typeDisplay = "Group Join";
          break;
        case "assignmentRelease":
          typeDisplay = "Assignment Release";
          break;
        case "discussionBook":
          typeDisplay = "Discussion Book";
          break;
        case "discussionConfirmed":
          typeDisplay = "Discussion Confirmed";
          break;
        case "assignmentSubmit":
          typeDisplay = "Assignment Submit";
          break;
        default:
          typeDisplay = "Unknown";
      }
      return typeDisplay;
    },
  },
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

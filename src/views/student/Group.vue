<template lang="pug">
  AssignInfo(:courseCode="code" :courseName="name" :assignNo="assignNo" purpose="Group Details")
    .content-div
      .left-portion
        .leader
          .user-label Leader
          UserCard(
            :username="username"
            :userid="userid"
            :src="src"
            :size="size"
            :mdiicon="mdiicon"
          )
        .members
          .user-label Members 
          UserCard(
            v-for="member in members"
            :key="member.userid"
            :username="member.username"
            :userid="member.userid"
            :src="member.src"
            :size="size"
            :mdiicon="mdiicon"
          )
        .indicator Member 4 of 4 are full
      .right-portion
        .description.info-section
          .info-label Description
          .desc-content 
            | lorem ipsum dolor sit esmart dsfjsifjufsifjffsfuhfhfsfh
            | sufhufhsf dasdasdgiugjasuighsufh dsfahfuihdfuashdfiuudhf
            | fsuifjjfuiweujf jsfujsfisjafuijasuifhuifhasufhasufhueef.
        .info-section
          .info-label Group ID
          .info-content vk17BnBq3n
        .info-section
          .info-label Programming Language
          .info-content #[v-icon mdi-language-csharp] C#
        .info-section
          .info-label Date of Submission
          .info-content #[v-icon mdi-calendar] 17 March, Thursday before 23:59
        .info-section
          .info-label Submission Status
          .info-content #[v-icon mdi-check-circle-outline] Submitted on 7th January 23:59 by Foo Zheng Xyu
        .mini-action-bar
          .icon-box
            v-icon mdi-rename-box
          .icon-box
            v-icon mdi-account-multiple-check-outline
          .icon-box
            v-icon mdi-download
          .icon-box
            v-icon mdi-upload
          .icon-box
            v-icon mdi-clock-alert-outline
          .icon-box
            v-icon mdi-star-four-points
</template>

<script>
import AssignInfo from "@/components/layouts/AssignInfo";
import UserCard from "@/components/UserCard";
export default {
  components: {
    AssignInfo,
    UserCard,
  },
  data: () => ({
    code: "UECS1234",
    name: "Ancient Programming",
    assignNo: 1,

    username: "Rhong Kok",
    userid: "1803315",
    src:
      "https://pbs.twimg.com/profile_images/1353340827708186634/UOeSEUW8_400x400.jpg",
    size: "39",
    mdiicon: "mdi-fingerprint",

    members: [
      {
        username: "CodeMiko",
        userid: "1500432",
        src:
          "https://pbs.twimg.com/profile_images/1356259426491977731/IWrndszd_400x400.jpg",
      },
      {
        username: "Savant G",
        userid: "1557104",
        src:
          "https://pbs.twimg.com/profile_images/1356355238756712448/n8w7UzE0_400x400.jpg",
      },
      {
        username: "Then Chuns",
        userid: "1748532",
        src:
          "https://pbs.twimg.com/profile_images/1338595420344262657/Azz9l8e5_400x400.jpg",
      },
    ],
  }),
  computed: {
    groupId() {
      return this.$router.params.groupId;
    },
  },
  mounted() {
    //
  },
};
</script>

<style lang="sass" scoped>
.content-div
  width: 50%
  margin: 50px auto 0
  // border: 1px solid #eee
  min-height: 400px
  display: flex

  .left-portion
    padding: 12px 16px
    border-radius: 16px
    width: 260px
    background: #eee

    .members
      margin-top: 16px

    .indicator
      font-size: 14px
      margin-top: 16px
      padding-top: 12px
      border-top: 1px solid white

  .right-portion
    flex-grow: 1
    height: 100%
    position: relative
    .description
      max-width: 600px

    .mini-action-bar
      position: absolute
      top: 0
      right: 0
      display: flex
      flex-direction: column
      padding: 5px
      background: #eee
      border-radius: 5px
      div
        width: fit-content
        padding: 10px
        border-radius: 999px
        margin: 3px
        &:hover
          background: gray


.user-label, .info-label
  font-size: 15px
  font-weight: 600

.info-section
  padding: 12px 16px
</style>

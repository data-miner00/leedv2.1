<template lang="pug">
  .group-info
    .page-description
      | Here contains all the essential information about the group of students.
      | More features coming soon.
    .section-divider
    .infok
      .group-header 
        .group-title {{ subjectCode }} {{ subjectTitle }} A{{ assignNo }}
        .shortcut
          router-link(:to="{ name: 'Workspace', params: { groupId } }")
            .action.workspace
              v-icon mdi-star-four-points
          router-link(:to="{ name: 'Plans', params: { groupId } }")
            .action.plan
              v-icon mdi-calendar-blank-multiple
          router-link(:to="{ name: 'Booking', params: { groupId } }")
            .action.discussion
              v-icon mdi-android-messages
          router-link(:to="{ name: 'Uploads', params: { groupId } }" v-if="isGroupLeader")
            .action.upload
              v-icon mdi-upload
          .action.download
            v-icon mdi-download
      .infos
        .infos-item
          .icon
            v-icon mdi-card-bulleted-outline
          .right
            .label Group ID
            .description {{ groupId }}
        .infos-item
          .icon
            v-icon mdi-circle-slice-3
          .right
            .label Members Count
            .description {{ memberCount }} 
              | out of allowed {{ maxStudent }} members. 
              | ({{ memberCount }}/{{ maxStudent }})
        .infos-item
          .icon
            v-icon mdi-music-note
          .right
            .label Assignment Description
            .description {{ description }}
        .infos-item
          .icon
            v-icon {{ languageIcon }}
          .right
            .label Programming Language
            .description {{ language }}
        .infos-item
          .icon
            v-icon mdi-calendar-alert
          .right
            .label Due Date
            .description {{ dueDate }}
        .infos-item
          .icon
            v-icon {{ submissionIcon }}
          .right
            .label Submission
            .description
              | #[span(v-if="submissionStatus") #[a.file(:href="downloadLink" target="_blank") {{ filename }}]] 
              | #[span(v-else)  Not submitted yet]
</template>

<script>
import axios from "axios";
import config from "@/config.js";
export default {
  data: () => ({
    leader: {
      id: "1803151",
      name: "John Mum Khong",
      avatarUri: "https://cdn.vuetifyjs.com/images/john.jpg",
    },
    members: [
      {
        id: "1803161",
        name: "Sian Choo Ten",
        avatarUri: "https://picsum.photos/200",
      },
      {
        id: "1803171",
        name: "Yan Wei",
        avatarUri: "https://picsum.photos/200",
      },
    ],
    filename: "UECS3383_MT_Chong Mum Khong_1803151.docx",
    submissionStatus: true,
    assignNo: 1,
    description: "Build an atomic bomb. Lorem Ipsum dolor sit amet.",
    assignmentId: "assign1",
    dueDate: "March 10, 2021",
    language: "C++",
    maxStudent: 4,
    subjectCode: "UECS1234",
    subjectTitle: "Ancient Programming",
  }),
  async mounted() {
    try {
      // const res = await axios.get(``);
      axios;
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    // assignmentId() {
    //   return this.route.params.assignmentId;
    // },
    groupId() {
      return this.$route.params.groupId;
    },
    languageIcon() {
      switch (this.language.toLowerCase()) {
        case "c#":
          return "mdi-language-csharp";
        case "c++":
          return "mdi-language-cpp";
        case "c":
          return "mdi-language-c";
        case "python":
          return "mdi-language-python";
        case "java":
          return "mdi-language-java";
        case "javascript":
          return "mdi-language-javascript";
        case "php":
          return "mdi-language-php";
        default:
          return "mdi-language-swift";
      }
    },
    submissionIcon() {
      return this.submissionStatus
        ? "mdi-check-circle-outline"
        : "mdi-close-circle-outline";
    },
    memberCount() {
      return this.members.length + 1;
    },
    downloadLink() {
      return config.url + "/assignment/submitted/" + this.filename;
    },
    questionLink() {
      return config.url + "/assignment/question/" + this.assignmentDoc;
    },
    isGroupLeader() {
      return this.userId === this.leader.id;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../../../../assets/sass/_mixins"
.infok
  border-bottom: 1px solid #eee

  .group-header
    padding: 10px 15px
    display: flex
    background: #fff
    width: 100%
    border-bottom: 1px solid #eee
    justify-content: space-between
    .group-title
      font-size: 19px
      font-weight: 800
    .shortcut
      display: flex
      justify-content: flex-end

      .action
        margin-left: 15px
        @include tooltip-helper
        &.workspace
          @include tooptip("Workspace", -35px)
        &.plan
          @include tooptip("Plans", -15px)
        &.discussion
          @include tooptip("Book discussion", -56px)
        &.upload
          @include tooptip("Upload assignment", -67px)
        &.download
          cursor: pointer
          @include tooptip("Download question", -67px)
      i
        color: black
  .infos
    padding: 10px 15px

    .icon
      height: 60px
      width: 60px
      display: grid
      place-items: center

    &-item
      display: flex
      max-width: 80%
      margin: 0 auto

      .right
        height: fit-content
        margin: auto 0
        color: #041419

        .label
          font-size: 13px
          color: #5b7083
</style>

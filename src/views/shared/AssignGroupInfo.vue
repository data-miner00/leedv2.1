<template lang="pug">
  .group-info
    .page-description
      | Here contains all the essential information about the group of students.
      | More features coming soon.
    .section-divider
    Loader(v-if="loading")
    div(v-else)
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
            .action.open(v-if="isOpen && members.length + 1 < maxStudent" @click="changeAvailability(false)")
              v-icon mdi-account-arrow-left
            .action.close(v-else @click="changeAvailability(true)")
              v-icon mdi-account-cancel
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
              v-icon mdi-post-outline
            .right
              .label Assignment Description
              .description {{ description }}
          .infos-item
            .icon
              v-icon {{ languageIcon }}
            .right
              .label Programming Language
              .description {{ langDisplay }}
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
                | #[span(v-else)  No submission yet.]
      .members-section
        .members-header 
          .members-title Members
        .members-item-wrapper
          .members-item(
            v-for="(member, index) in allMembers"
            :key="member.id"
          )
            .left
              .index {{ index + 1 }}
            .right
              .middle
                .name {{ member.name }} #[span #[v-icon.leader(v-if="member.id == leader.id") mdi-crown]]
                .id @{{ member.id }}
              .side
                div
                  v-avatar(size="39")
                    img(:src="member.avatarUri")
</template>

<script>
import axios from "axios";
import config from "@/config.js";

import Loader from "@/components/Loader";

export default {
  components: {
    Loader,
  },
  data: () => ({
    loading: true,

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
    language: "cpp",
    maxStudent: 4,
    subjectCode: "UECS1234",
    subjectTitle: "Ancient Programming",
    isOpen: true,
  }),
  async mounted() {
    try {
      const res = await axios.get(`group/${this.groupId}/extended/v1`);
      this.leader = res.data.leader;
      this.members = res.data.members;
      this.filename = res.data.filename;
      this.submissionStatus = res.data.submissionStatus;
      this.assignNo = res.data.assignNo;
      this.description = res.data.description;
      this.dueDate = res.data.dueDate;
      this.language = res.data.language;
      this.maxStudent = res.data.maxStudent;
      this.subjectCode = res.data.subjectCode;
      this.subjectTitle = res.data.subjectTitle;
      this.isOpen = res.data.isOpen;

      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async changeAvailability(isOpen) {
      try {
        if (this.isOpen != isOpen) {
          this.isOpen = isOpen;

          await axios.patch(`group/${this.groupId}/availability`, {
            isOpen: this.isOpen,
          });
        } else console.log("You already is!");
      } catch (error) {
        console.error(error);
      }
    },
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
        case "csharp":
          return "mdi-language-csharp";
        case "cpp":
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
        case "swift":
          return "mdi-language-swift";
        case "go":
          return "mdi-language-go";
        case "haskell":
          return "mdi-language-haskell";
        case "r":
          return "mdi-language-r";
        case "html":
          return "mdi-language-html5";
        default:
          return "mdi-music-clef-treble";
      }
    },
    langDisplay() {
      switch (this.language) {
        case "csharp":
          return "C#";
        case "cpp":
          return "C++";
        case "c":
          return "C";
        case "python":
          return "Python";
        case "java":
          return "Java";
        case "javascript":
          return "Javascript";
        case "php":
          return "PHP";
        case "swift":
          return "Swift";
        case "go":
          return "Go";
        case "haskell":
          return "Haskell";
        case "r":
          return "R";
        case "html":
          return "HTML";
        default:
          return this.language.charAt(0).toUpperCase() + this.language.slice(1);
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
    allMembers() {
      return [this.leader, ...this.members];
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/_mixins"

.group-info
  position: relative

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
        &.open
          cursor: pointer
          @include tooptip("Close group", -45px)
        &.close
          cursor: pointer
          @include tooptip("Open group", -45px)

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
.members-section
  border-bottom: 1px solid #eee
  .members-header
    padding: 10px 15px
    display: flex
    background: #fff
    width: 100%
    border-bottom: 1px solid #eee
    justify-content: space-between
    .members-title
      font-size: 19px
      font-weight: 800
  .members-item-wrapper
    width: 300px
    margin: 0 auto
    .members-item
      padding: 15px
      display: flex
      align-items: center
      width: 100%
      margin: 0 auto
      .left
        width: 50px
        height: 100%
        display: grid
        place-items: center
        .index
          text-align: center
          border-radius: 999px
          font-size: 11px
          line-height: 25px
          background: #eee
          height: 25px
          width: 25px
      .right
        display: flex
        .middle
          width: 150px
          .name
            font-weight: 800
            .leader
              font-size: 14px
              color: #faa61a
            span
              font-weight: normal
              @include tooltip-helper
              @include tooptip("Group leader", -45px)
          .id
            color: #777
        .side
          margin-left: 25px
          div
            margin: auto 0
</style>

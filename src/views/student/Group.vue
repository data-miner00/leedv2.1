<template lang="pug">
  AssignInfo(:courseCode="subjectCode" :courseName="subjectTitle" :assignNo="assignNo" purpose="Group Details")
    .content-div
      .left-portion
        .leader
          .user-label Leader #[span.leader-icon #[v-icon mdi-crown]]
          UserCard(
            :username="leader.name"
            :userid="leader.id"
            :src="leader.avatarUri"
            :size="size"
            :mdiicon="mdiicon"
          )
        .members
          .user-label Members 
          UserCard(
            v-for="member in members"
            :key="member.id"
            :username="member.name"
            :userid="member.id"
            :src="member.avatarUri"
            :size="size"
            :mdiicon="mdiicon"
          )
        .indicator #[span.member-count {{ memberCount }}]/{{ maxStudent }} members currently
      
      .right-portion
        .description.info-section
          .info-label Assignment Description
          .desc-content {{ description }}
        .info-section
          .info-label Group ID
          .info-content {{ groupId }}
        .info-section
          .info-label Programming Language
          .info-content #[v-icon {{ languageIcon }}] {{ language }}
        .info-section
          .info-label Assignment Due Date
          .info-content #[v-icon mdi-calendar] {{ dueDate }}
        .info-section
          .info-label Submission Status
          .info-content 
            | #[v-icon {{ submissionIcon }}] 
            | #[span(v-if="submissionStatus") #[a.file(:href="downloadLink" target="_blank") {{ filename }}]] 
            | #[span(v-else)  Not submitted yet]
        
        
        .mini-action-bar
          .icon-box
            v-icon mdi-download
          .icon-box
            v-icon mdi-account-multiple-check-outline
          .icon-box
            v-icon mdi-upload
          //- .icon-box
          //-   v-icon mdi-clock-alert-outline
          .icon-box
            v-icon mdi-star-four-points
</template>

<script>
import axios from "axios";
import AssignInfo from "@/components/layouts/AssignInfo";
import UserCard from "@/components/UserCard";
export default {
  components: {
    AssignInfo,
    UserCard,
  },
  data: () => ({
    leader: {},
    members: [],
    submissionStatus: false,
    assignNo: 1,
    description: "",
    dueDate: {},
    language: "",
    maxStudent: null,
    assignmentDoc: "",
    assignmentId: "",
    subjectCode: "",
    subjectTitle: "",
    filename: "",
  }),
  computed: {
    groupId() {
      return this.$route.params.groupId;
    },
    memberCount() {
      return this.members.length + 1;
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
    downloadLink() {
      return "http://localhost:5000/api/assignment/submitted/" + this.filename;
    },
    questionLink() {
      return (
        "http://localhost:5000/api/assignment/question/" + this.assignmentDoc
      );
    },
    // Fixed properties
    size() {
      return "39";
    },
    mdiicon() {
      return "mdi-account-circle";
    },
  },
  async mounted() {
    //
    try {
      const res = await axios.get(`/group/${this.groupId}/extended/v1`);
      const {
        leader,
        members,
        filename,
        submissionStatus,
        assignNo,
        description,
        dueDate,
        language,
        maxStudent,
        assignmentDoc,
        assignmentId,
        subjectCode,
        subjectTitle,
      } = res.data;

      this.leader = leader;
      this.members = members;
      this.filename = filename;
      this.submissionStatus = submissionStatus;
      this.assignNo = assignNo;
      this.description = description;
      this.dueDate = dueDate; // timestamp object
      this.language = language;
      this.maxStudent = maxStudent;
      this.assignmentDoc = assignmentDoc;
      this.assignmentId = assignmentId;
      this.subjectCode = subjectCode;
      this.subjectTitle = subjectTitle;
    } catch (error) {
      console.error(error);
    }
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
    height: fit-content

    .members
      margin: 16px 0

    .indicator
      font-size: 14px
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

.leader-icon i
  font-size: 14px
  color: #faa61a

.user-label, .info-label
  font-size: 15px
  font-weight: 600

.info-section
  padding: 12px 16px
</style>

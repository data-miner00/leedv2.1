<template lang="pug">
  AssignmentLayout(:courseCode="subjectCode" :courseName="subjectTitle" :assignNo="assignNo")
    .containern
      UploadForm(v-if="!isSubmitted")/
      .submitted-msg(v-else) 
        div Thank you for your effort and your submission has been received!
</template>

<script>
import AssignmentLayout from "@/components/layouts/AssignInfo";
import UploadForm from "@/components/UploadForm";
import axios from "axios";

export default {
  components: {
    AssignmentLayout,
    UploadForm,
  },
  props: {
    //
  },
  data: () => ({
    isSubmitted: false,
  }),
  computed: {
    subjectCode() {
      return this.$store.state.assignment.subjectCode;
    },
    subjectTitle() {
      return this.$store.state.assignment.subjectTitle;
    },
    assignNo() {
      return this.$store.state.assignment.assignNo;
    },
    groupId() {
      return this.$store.state.assignment.groupId;
    },
  },
  async mounted() {
    const req = await axios.get(`group/${this.groupId}`);
    this.isSubmitted = req.data.submissionStatus;
  },
};
</script>

<style lang="sass" scoped>
.containern
  width: 50%
  margin: 0 auto
  padding: 100px 0
  .submitted-msg
    background: #eee
    height: 300px
    font-size: 19px
    display: grid
    place-items: center
    border-radius: 5px
    div
      width: fit-content
</style>

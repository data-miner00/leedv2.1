<template lang="pug">
  AssignmentLayout(:courseCode="subjectCode" :courseName="subjectTitle" :assignNo="assignNo")
    .containern
      UploadForm/
</template>

<script>
import AssignmentLayout from "@/components/layouts/AssignInfo";
import UploadForm from "@/components/UploadForm";

export default {
  components: {
    AssignmentLayout,
    UploadForm,
  },
  props: {
    //
  },
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
  },
};
</script>

<style lang="sass" scoped>
.containern
  width: 50%
  margin: 0 auto
</style>

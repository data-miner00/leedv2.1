<template lang="pug">
  .assignments
    .page-description
      | The below are the assignments of the enrolled courses that are available
      | for this semester. To direct to the workspace for the assignment, click on
      | the button. To navigate to the assignment and group details, click on the
      | star button.
    .section-divider
    AssignmentItem(
      v-for="assignment in assignments"
      :key="assignment.assignmentId"
      :courseCode="assignment.subjectCode"
      :courseName="assignment.subjectTitle"
      :assignNo="assignment.assignNo"
    )
</template>

<script>
import AssignmentItem from "@/components/lecturer/AssignmentItem";
import axios from "axios";
export default {
  components: {
    AssignmentItem,
  },
  data: () => ({
    assignments: [],
  }),
  async mounted() {
    try {
      const res = await axios.get(`assignment/${this.userId}/overview`);
      this.assignments = res.data;
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    userId() {
      return this.$store.state.user.userId;
    },
  },
};
</script>

<style lang="sass" scoped></style>

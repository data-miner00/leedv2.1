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
      :assignmentId="assignment.assignmentId"
      :assignNo="assignment.assignNo"
    )
    .add-assignment(@click="dialog = true")
      .add-wrapper
        .icon-wrap
          v-icon mdi-plus-circle
        .label Add an Assignment
    v-dialog(v-model="dialog" width="400")
      AddAssignPopup(@close="dialog = false")/
</template>

<script>
import AssignmentItem from "@/components/lecturer/AssignmentItem";
import AddAssignPopup from "@/components/lecturer/AddAssignmentPopup";
// import axios from "axios";
export default {
  components: {
    AssignmentItem,
    AddAssignPopup,
  },
  data: () => ({
    assignments: [
      {
        assignmentId: "assign1",
        assignNo: 1,
        subjectCode: "UECS1234",
        subjectTitle: "Ancient Programming",
      },
      {
        assignmentId: "assign2",
        assignNo: 2,
        subjectCode: "UECS1234",
        subjectTitle: "Ancient Programming",
      },
      {
        assignmentId: "assign3",
        assignNo: 1,
        subjectCode: "UECS1235",
        subjectTitle: "System Analysis",
      },
    ],
    dialog: false,
  }),
  async mounted() {
    // try {
    //   const res = await axios.get(`assignment/${this.userId}/overview`);
    //   this.assignments = res.data;
    // } catch (error) {
    //   console.error(error);
    // }
  },
  computed: {
    userId() {
      return this.$store.state.user.userId;
    },
  },
};
</script>

<style lang="sass" scoped>
.add-assignment
  height: 75px
  display: grid
  place-items: center
  border-bottom: 1px solid #eee
  cursor: pointer
  // can be exported
  // background: #f7f9fa
  transition: background 0.2s
  &:hover
    background: #eee
  // end
  .add-wrapper
    width: fit-content
    height: fit-content
    display: flex
    align-items: center
    .icon-wrap

    .label
      margin-left: 10px
</style>

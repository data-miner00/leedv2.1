<template>
  <div class="assignments">
    <div class="page-description">
      The below are the assignments of the enrolled courses that are available
      for this semester. To direct to the workspace for the assignment, click on
      the button. To navigate to the assignment and group details, click on the
      star button.
    </div>
    <div class="section-divider"></div>
    <AssignmentItem
      v-for="assignment in assignments"
      :key="assignment.code"
      :groupId="assignment.groupId"
      :courseCode="assignment.courseCode"
      :courseName="assignment.courseName"
      :assignNo="assignment.assignNo"
    />
  </div>
</template>

<script>
import axios from "axios";
import AssignmentItem from "@/components/AssignmentItem";
export default {
  components: {
    AssignmentItem,
  },
  data: () => ({
    assignments: [
      {
        courseCode: "UECS1234",
        courseName: "Advanced Quantum Mechanics",
        assignNo: 1,
        groupId: "axss",
      },
      {
        courseCode: "UECS1234",
        courseName: "Advanced Quantum Mechanics",
        assignNo: 2,
        groupId: "apunen",
      },
      {
        courseCode: "UECS1234",
        courseName: "Advanced Quantum Mechanics",
        assignNo: 3,
        groupId: "scss",
      },
    ],
  }),
  // async mounted() {
  //   let data = await axios.get();

  // },
};
</script>

<style lang="sass" scoped>
.assignments
  .section-divider
    background: #f7f9fa
    height: 10px
    border-bottom: 1px solid #eee
</style>

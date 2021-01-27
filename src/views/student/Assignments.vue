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
      courseCode="UECS1234"
      courseName="Advanced Quantum Mechanics"
      assignNo="1"
    />
    <AssignmentItem
      courseCode="UECS1234"
      courseName="Advanced Quantum Mechanics"
      assignNo="2"
    />
    <AssignmentItem
      courseCode="UECS1234"
      courseName="Advanced Quantum Mechanics"
      assignNo="3"
    />
    <div class="section-divider"></div>
  </div>
</template>

<script>
import AssignmentItem from "@/components/AssignmentItem";
export default {
  components: {
    AssignmentItem,
  },
};
</script>

<style lang="sass" scoped>
.assignments
  .section-divider
    background: #f7f9fa
    height: 10px
    border-bottom: 1px solid #eee
</style>

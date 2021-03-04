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
      v-for="(assignment, index) in assignments"
      :key="index"
      :groupId="assignment.groupId"
      :courseCode="assignment.subjectCode"
      :courseName="assignment.subjectTitle"
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
  data: () => ({}),
  async mounted() {
    //
    if (this.assignments.length == 0) {
      try {
        const res = await axios.post("assignment/overview", {
          subjectsId: this.subjectsId,
          groupsId: this.groupsId,
        });

        // If namespaced: true, need to commit("assignment/setAssignments", res.data);
        if (res.status == 200) this.$store.commit("setAssignments", res.data);
        console.log(this.assignments);
        console.log(res.status);
      } catch (error) {
        console.error(error);
      }
    }
  },
  computed: {
    subjectsId() {
      return this.$store.state.user.subjectsId;
    },
    groupsId() {
      return this.$store.state.user.groupsId;
    },
    assignments() {
      return this.$store.state.assignment.assignments;
    },
  },
};
</script>

<style lang="sass" scoped></style>

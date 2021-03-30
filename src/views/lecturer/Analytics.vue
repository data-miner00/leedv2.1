<template lang="pug">
  .analytics
    .page-description
      | Analysis is the essential work for identifying lagged students 
      | and keep track of student's activity to make sure that they are
      | active and proceeding most of the time.
    .section-divider
    .graph
      Loader(v-if="loading")
      AssignmentGraphs(
        v-else
        v-for="(assignment, index) in assignmentsData"
        :key="index"
        :subjectTitle="assignment.subjectTitle"
        :subjectCode="assignment.subjectCode"
        :assignNo="assignment.assignNo"
        :dataset1="assignment.dataset1"
        :dataset2="assignment.dataset2"
      )
</template>

<script>
import axios from "axios";

import AssignmentGraphs from "@/components/lecturer/AssignmentGraphs";
import Loader from "@/components/Loader";

export default {
  components: {
    AssignmentGraphs,
    Loader,
  },
  data: () => ({
    loading: true,

    assignmentsData: [],
    subjectTitle: "Signal Engineering",
    subjectCode: "UECS1234",
    assignNo: 1,
    dataset1: [
      { name: "5 People", value: 12 },
      { name: "4 People", value: 8 },
      { name: "3 People", value: 5 },
      { name: "2 People", value: 2 },
      { name: "Orphan", value: 10 },
    ],
    dataset2: [
      { name: "Submitted", value: 12 },
      { name: "Not Submitted", value: 12 },
    ],
    // dataset3: [
    //   { name: "", value: "" }
    // ]
  }),
  async mounted() {
    try {
      const res = await axios.post(`lecturer/${this.userId}/assignments`, {
        subjectsId: this.subjectsId,
      });

      const { assignmentsId } = res.data;

      assignmentsId.forEach(async (id) => {
        const resp = await axios.get(`assignment/${id}/data`);
        this.assignmentsData.push(resp.data);
      });

      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    subjectsId() {
      return this.$store.state.user.subjectsId;
    },
    userId() {
      return this.$store.state.user.userId;
    },
  },
};
</script>

<style lang="sass" scoped></style>

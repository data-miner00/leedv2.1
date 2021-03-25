<template lang="pug">
  .analytics
    .page-description
      | Analysis is the essential work for identifying lagged students 
      | and keep track of student's activity to make sure that they are
      | active and proceeding most of the time.
    .section-divider
    .graph
      AssignmentGraphs(
        :subjectTitle="subjectTitle"
        :subjectCode="subjectCode"
        :dataset1="dataset1"
        :dataset2="dataset2"
      )
</template>

<script>
// import axios from "axios";
import AssignmentGraphs from "@/components/lecturer/AssignmentGraphs";

export default {
  components: {
    AssignmentGraphs,
  },
  data: () => ({
    subjectTitle: "Signal Engineering",
    subjectCode: "UECS1234",
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
      // cons res = await axios.get("")
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style lang="sass" scoped></style>

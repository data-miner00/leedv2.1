<template lang="pug">
  .courses
    .page-description(v-if="!isStudent")
      | The below are a listing of subjects being taught by you on the
      | current semester. The are a few actions available, please explore
      | them accordingly.
    .page-description(v-else)
      | All the programming courses that is enrolled is shown on below. Click on
      | the individual course to view the details of it.
    .section-divider
    Course(
      v-for="course in courses"
      :key="course.code"
      :code="course.code"
      :name="course.name"
      :description="course.description"
      :lecturerName="course.lecturerName"
      :studentsCount="course.studentsCount"
    )
</template>

<script>
import Course from "@/components/Course";
import axios from "axios";
export default {
  components: {
    Course,
  },
  data: () => ({
    courses: [
      {
        code: "UECS1234",
        name: "Signal Engineering",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        lecturerName: "Samantha Ludwig",
        studentsCount: 120,
      },
      {
        code: "UEEN8332",
        name: "Hydraulics Analysis",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        lecturerName: "Dave Hudson",
        studentsCount: 190,
      },
      {
        code: "UEEP7847",
        name: "Ancient Programming",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        lecturerName: "Pope Martin",
        studentsCount: 100,
      },
      {
        code: "UEEP1784",
        name: "Advanced Quantum Mechanics",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        lecturerName: "Edward Einstein",
        studentsCount: 200,
      },
      {
        code: "UEMH4532",
        name: "Harmonics",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        lecturerName: "Van de Walls",
        studentsCount: 150,
      },
    ],
  }),
  async mounted() {
    try {
      const res = await axios.post("subject", this.subjectsId);
      this.courses = res.data;
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    isStudent() {
      return this.$store.state.user.userType === "student";
    },
    subjectsId() {
      return this.$store.state.user.subjectsId;
    },
  },
};
</script>

<style lang="sass" scoped></style>

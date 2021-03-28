<template>
  <div class="courses">
    <div class="page-description">
      All the programming courses that is enrolled is shown on below. Brief
      details are shown accordingly. Refresh to get latest update.
    </div>
    <div class="section-divider"></div>
    <Course
      v-for="course in courses"
      :key="course.code"
      :code="course.code"
      :name="course.name"
      :description="course.description"
      :lecturerName="course.lecturerName"
      :studentsCount="course.studentsCount"
    />
  </div>
</template>

<script>
import axios from "axios";
import Course from "@/components/Course";

export default {
  components: { Course },
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
    subjectsId() {
      return this.$store.state.user.subjectsId;
    },
  },
};
</script>

<style lang="sass" scoped>
.course
  border-bottom: 1px solid #eee

  &-title
    padding: 10px 0
    font-size: 19px
    font-weight: 800
    background: #fff
    width: 100%
    text-align: center
    border-bottom: 1px solid #eee

  .infos
    padding: 10px 15px

    .icon
      height: 60px
      width: 60px
      display: grid
      place-items: center

    &-item
      display: flex
      max-width: 80%
      margin: 0 auto

      .right
        height: fit-content
        margin: auto 0
        color: #041419

        .label
          font-size: 13px
          color: #5b7083
</style>

<template>
  <div class="courses">
    <div class="page-description">
      All the programming courses that is enrolled is shown on below. Click on
      the individual course to view the details of it.
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
        name: "Wire and Rope Analysis",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        lecturerName: "Lucifer Anept",
        studentsCount: 190,
      },
      {
        code: "UEEP7847",
        name: "Paper Philosophy",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        lecturerName: "Pope Martin",
        studentsCount: 100,
      },
    ],
  }),
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

<template lang="pug">
  .wrapper
    .horizontal-group
      .course-code {{ courseCode }}
      .horizontal-group-2
        .course-name {{ courseName }}
        .assign-no {{ assignNo }}
    .link-wrapper
      .link-icon
        v-icon mdi-alien-outline
      .link-icon
        v-icon mdi-alien-outline
      .link-icon
        v-icon mdi-alien-outline
</template>

<script>
export default {
  props: {
    courseCode: String,
    courseName: String,
    assignNo: Number,
    assignmentId: String,
  },
};
</script>

<style lang="sass" scoped>
.wrapper
  padding: 15px
  border-bottom: 1px solid #eee
  display: flex
  align-items: center
  justify-content: space-between

  .horizontal-group

    .course-code
      font-weight: 600
      font-size: 13px

    .horizontal-group-2
      display: flex
      align-items: center
      .assign-no
        font-size: 8px
        padding: 3px 10px
        background: #eee
        border-radius: 25px
        margin-left: 5px

  .link-wrapper
    display: flex
    justify-content: space-between
    width: 80px
</style>

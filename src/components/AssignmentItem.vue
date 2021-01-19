<template>
  <div class="wrapper">
    <div class="horizontal-group">
      <div class="course-code">{{ courseCode }}</div>
      <div class="horizontal-group-2">
        <div class="course-name">{{ courseName }}</div>
        <div class="assign-no">{{ assignNo }}</div>
      </div>
    </div>
    <div class="link-icon">
      <v-icon>mdi-star-four-points</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    courseCode: String,
    courseName: String,
    assignNo: String,
    assignDescription: String,
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
</style>

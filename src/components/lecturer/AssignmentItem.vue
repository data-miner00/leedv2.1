<template lang="pug">
  .wrapper
    .horizontal-group
      .course-code {{ courseCode }}
      .horizontal-group-2
        .course-name {{ courseName }}
        .assign-no {{ assignNo }}
    .link-wrapper
      router-link(:to="{ name: 'assignGroupsList', params: { assignmentId } }")
        .link-icon.list
          v-icon mdi-account-group
      router-link(:to="{ name: 'assignmentInfo', params: { assignmentId } }")
        .link-icon.infor
          v-icon mdi-information-outline
      .link-icon.ntg
        v-icon mdi-folder
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
@import "../../assets/sass/_mixins"
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

    .link-icon
      @include tooltip-helper
      &.list
        @include tooptip("Groups list", -35px)
      &.infor
        @include tooptip("Info")
      &.ntg
        @include tooptip("Ntg")
</style>

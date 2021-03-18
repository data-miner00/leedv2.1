<template lang="pug">
  .group-item
    .wrapperr
      .side
        .index
          div {{ index + 1 }}
        .details
          .leader-name {{ leaderName }}
          .group-member-count 
            | #[span.normal(:style="memberCount>=maxMember?'color:crimson;':'color:green'") {{ memberCount }}]
            | #[span.to-small /{{ maxMember }} members currently]
      .actions
        .link-icon
          v-icon mdi-star-four-points-outline
        .link-icon
          v-icon mdi-information-outline
        .link-icon(v-if="submitted")
          v-icon.submitted mdi-check-bold
        .link-icon(v-else)
          v-icon.not-submitted mdi-close-thick
</template>

<script>
export default {
  props: {
    index: Number,
    leaderName: String,
    memberCount: Number,
    maxMember: Number,
    groupId: String,
    submitted: {
      type: Boolean,
      default: false,
    },
    submittedDate: String,
  },
};
</script>

<style lang="sass" scoped>
.group-item
  border-bottom: 1px solid #eee
  .wrapperr
    display: flex
    justify-content: space-between
    align-items: center
    margin: 0 auto
    width: 600px
    padding: 30px 0

    .side
      display: flex
      width: 230px
      align-items: center

      .index
        width: 30px
        height: 30px
        border-radius: 999px
        background: #eee
        display: grid
        place-items: center
        font-size: 9px
        font-weight: 800
        div
          width: fit-content

      .details
        padding-left: 25px

        .group-member-count
          font-weight: 800
          .normal
            // color: crimson
          .to-small
            padding-left: 2px
            font-size: 12px
            // color: rgb(121, 75, 196)


    .actions
      display: flex
      justify-content: space-between
      width: 80px

      .submitted
        color: green !important
      .not-submitted
        color: crimson
</style>

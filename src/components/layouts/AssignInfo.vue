<template>
  <div class="assign-info">
    <ReturnBtn />

    <div class="information">
      <div class="icon">Leed</div>
      <div class="subject">
        <div>{{ courseCode }}</div>
        {{ courseName }} <v-chip>{{ assignNo }}</v-chip>
      </div>
      <div>{{ purpose }}</div>
    </div>

    <slot></slot>
  </div>
</template>

<script>
import ReturnBtn from "@/components/ReturnBtn";
export default {
  props: {
    courseCode: String,
    courseName: String,
    assignNo: Number,
    purpose: String,
  },
  components: {
    ReturnBtn,
  },
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/variables"

.assign-info
  min-height: 100vh
  padding: 100px 0
  font-size: 14px

  .information
    width: fit-content
    margin: auto
    text-align: center

    .icon
      text-transform: uppercase
      font-size: 30px
      font-family: $shippori
      font-weight: 800
      letter-spacing: 5px

    .subject
      font-size: 25px
      margin: 25px 0

      div
        font-size: 14px
        font-weight: 800
        padding: 6px 8px
</style>

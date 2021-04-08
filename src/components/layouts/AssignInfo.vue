<template>
  <div class="assign-info">
    <ReturnBtn />

    <div class="information">
      <div class="wrapper">
        <div class="purpose">
          <div>{{ purpose }}</div>
        </div>
        <div>
          <span class="cc">{{ courseCode }}</span> {{ courseName }} A{{
            assignNo
          }}
        </div>
      </div>
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
  font-size: 14px

  .information
    width: 100vw
    display: flex
    justify-content: center
    height: 53px
    border-bottom: 1px solid #eee
    position: sticky
    background: #fff
    top: 0
    z-index: 1
    .wrapper
      width: 689px
      border-left: 1px solid #eee
      padding-left: 15px
      .purpose
        font-weight: 800
        font-size: 19px

      .cc
        font-weight: 800
        color: brown
</style>

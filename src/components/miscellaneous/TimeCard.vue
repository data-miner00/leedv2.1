<template>
  <div>
    <div class="misc-time-info">
      <div class="date-info">
        <v-icon>mdi-calendar</v-icon> January 2, <span>Thursday</span>
      </div>
      <div class="week-info">Week 3</div>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.misc-time-info
  margin-top: 10px
  background: rgb(247, 249, 250)
  width: 100%
  border-radius: 15px
  padding: 15px
  display: flex
  justify-content: space-between

  .date-info
    font-weight: 700
    padding: 4px 10px

    span
      color: #666

  .week-info
    background: white
    padding: 4px 10px
    border-radius: 50px
    font-weight: 900
    font-size: 14px
    
</style>

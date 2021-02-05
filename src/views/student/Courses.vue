<template>
  <div class="courses">
    <div class="page-description">
      All the programming courses that is enrolled is shown on below. Click on
      the individual course to view the details of it.
    </div>
    <div class="section-divider"></div>
    <div class="course">
      <div class="course-title">
        UECS1234 Signal Engineering
      </div>
      <div class="infos">
        <div class="infos-item">
          <div class="icon"><v-icon>mdi-plus</v-icon></div>
          <div class="right">
            <div class="label">Course Description</div>
            <div class="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>

        <div class="infos-item">
          <div class="icon"><v-icon>mdi-plus</v-icon></div>
          <div class="right">
            <div class="label">Lecturer</div>
            <div class="description">Ding Yin Jih</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    courseName: String,
    courseDescription: String,
    lecturerName: String,
    lecturerEmail: String,
    lecturerPhone: String,
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

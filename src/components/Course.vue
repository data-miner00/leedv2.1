<template>
  <div class="course">
    <div class="course-title">{{ code }} {{ name }}</div>
    <div class="infos">
      <div class="infos-item">
        <div class="icon">
          <v-icon>mdi-clipboard-text-multiple-outline</v-icon>
        </div>
        <div class="right">
          <div class="label">Course Description</div>
          <div class="description">
            {{
              /*Lorem ipsum dolor sit amet consectetur adipisicing elit.*/ description
            }}
          </div>
        </div>
      </div>

      <div class="infos-item">
        <div class="icon"><v-icon>mdi-account</v-icon></div>
        <div class="right">
          <div class="label">Lecturer</div>
          <div class="description">{{ lecturerName }}</div>
        </div>
      </div>

      <div class="infos-item">
        <div class="icon"><v-icon>mdi-creation</v-icon></div>
        <div class="right">
          <div class="label">Difficulty</div>
          <div class="description">Easy</div>
        </div>
      </div>

      <div class="infos-item">
        <div class="icon"><v-icon>mdi-sparkles</v-icon></div>
        <div class="right">
          <div class="label">Students Count</div>
          <div class="description">{{ studentsCount }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    code: String,
    name: String,
    description: String,
    lecturerName: String,
    lecturerId: String,
    studentsCount: Number,
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

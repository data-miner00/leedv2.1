<template lang="pug">
  .user-card
    v-avatar(:size="size")
      img(:src="src" :alt="username")
    .user-info
      .user-info-inner
        .user-name
          .user-name-inner
            span {{ username }}
        .user-id
          .user-id-inner
            span @{{ userid }}
    .action-icon
      v-icon {{ mdiicon }}
</template>

<script>
export default {
  props: {
    size: String,
    src: String,
    username: String,
    userid: String,
    mdiicon: String,
  },
};
</script>

<style lang="sass" scoped>
.user-card
  padding: 10px
  height: 59px
  display: flex
  align-items: center
  .user-info
    &-inner
      margin: 0 10px

      .user-name

        &-inner
          height: 20px
          span
            font-size: 15px
            font-weight: 800

      .user-id
        width: 100%

        &-inner
          height: 20px
          span
            font-size: 15px
            color: #777
.action-icon
  display: flex
  flex-grow: 1
  justify-content: flex-end
</style>

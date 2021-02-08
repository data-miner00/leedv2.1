<template>
  <div class="user-panel">
    <div class="user-panel-inner">
      <v-avatar size="39">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" :alt="userName" />
      </v-avatar>
      <div class="user-info">
        <div class="user-info-inner">
          <div class="user-name">
            <div class="user-name-inner">
              <span>{{ userName }}</span>
            </div>
          </div>
          <div class="user-id">
            <div class="user-id-inner">
              <span>@{{ userId }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="chevron">
        <v-icon>mdi-chevron-down</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userName() {
      return this.$store.state.user.name;
    },
    userId() {
      return this.$store.state.user.userId;
    },
  },
};
</script>

<style lang="sass" scoped>
.user-panel
  margin: 10px 0

  &-inner
    padding: 10px
    height: 59px
    display: flex
    align-items: center
    border-radius: 50px
    transition: background-color .2s
    cursor: pointer

    &:hover
      background-color: #ccc

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
    .chevron
      display: flex
      flex-grow: 1
      justify-content: flex-end
</style>

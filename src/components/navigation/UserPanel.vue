<template>
  <div class="user-panel">
    <div class="user-panel-inner" @click="isPanelClicked = !isPanelClicked">
      <v-avatar size="39">
        <img :src="avatarUri" :alt="userName" />
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
    <div
      class="setting-popup"
      v-if="isPanelClicked"
      v-click-outside="verifyPanelState"
    >
      <div class="info-duplicate">
        <v-avatar size="48">
          <img :src="avatarUri" :alt="userName" />
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
          <!-- mdi-dots-horizontal -->
          <v-icon>mdi-check-all</v-icon>
        </div>
      </div>
      <div class="actions">
        This is action one
      </div>
      <div class="actions" @click="logout">Logout @{{ userId }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isPanelClicked: false,
  }),
  methods: {
    logout() {
      //
    },
    verifyPanelState() {
      if (this.isPanelClicked) this.isPanelClicked = false;
      else this.isPanelClicked = true;
    },
  },
  computed: {
    userName() {
      return this.$store.state.user.name;
    },
    userId() {
      return this.$store.state.user.userId;
    },
    avatarUri() {
      return this.$store.state.user.avatarUri;
    },
  },
};
</script>

<style lang="sass" scoped>
.user-panel
  margin: 10px 0
  position: relative

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
//
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

.setting-popup
  position: absolute
  top: -210px
  left: -23px
  width: 300px
  height: 200px
  padding: 12px 0
  border-radius: 16px
  background: white
  box-shadow: rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px
  .info-duplicate
    height: 73px
    width: 100%
    padding: 12px 16px
    display: flex
    align-items: center
  .actions
    border-top: 1px solid #eee
    height: 51px
    padding: 16px
    width: 100%
    font-size: 15px
    cursor: pointer
    transition: background .2s
    &:hover
      background: #eee
</style>

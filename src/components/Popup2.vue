<template lang="pug">
  .join-group
    v-card.px-4
      v-card-title Create or Join a Group
      v-card-text
        .alignment
          .join
            input.group-id-input(
              placeholder="Group Id"
              type="text"
              v-model="groupIdInput"
            )
            
            .join-btn.btn
              div
                v-icon mdi-at
                
                span Join
            
          .create
            .create-btn.btn
              div
                v-icon mdi-asterisk
                span Create
        .not-exist Sorry, the stipulated group does not exist!
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    groupIdInput: "",
  }),
  computed: {
    userId() {
      return this.$store.state.user.userId;
    },
  },
  methods: {
    join() {
      //
      axios;
    },
    create() {
      //
    },
  },
};
</script>

<style lang="sass" scoped>
//
.alignment
  display: flex
  justify-content: space-between
  width: 100%
.join
  width: 47%
  height: 130px
  display: flex
  flex-direction: column
  justify-content: space-between
.create
  width: 47%
  height: 130px
  display: flex
  flex-direction: column
  justify-content: flex-end
.btn
  display: grid
  place-items: center
  width: 100%
  border: 1px solid #eee
  height: 80px
  transition: background .4s
  cursor: pointer
  &:hover
    background: #efe
  span
    margin-left: 4px
.group-id-input
  outline: none
  width: 100%
  padding: 8px 10px
  border: 1px solid #eee
  border-radius: 5px
</style>

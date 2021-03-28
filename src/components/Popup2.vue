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
            
            .join-btn.btn(@click="join")
              div
                v-icon mdi-at
                
                span Join
            
          .create
            .create-btn.btn(@click="create")
              div
                v-icon mdi-asterisk
                span Create
        .err-msg(v-if="errored") {{ errorMessage }}
</template>

<script>
import axios from "axios";
export default {
  props: {
    assignmentId: String,
  },
  data: () => ({
    groupIdInput: "",
    errorMessage: "Unknown Error Occurred!",
    errored: false,
  }),
  computed: {
    userId() {
      return this.$store.state.user.userId;
    },
    email() {
      return this.$store.state.user.email;
    },
  },
  methods: {
    async join() {
      //
      try {
        const res = await axios.post("group/join", {
          studentId: this.userId,
          groupId: this.groupIdInput,
          email: this.email,
          assignmentId: this.assignmentId,
        });

        if (res.status == 200) {
          this.reset();
        } else if (res.status == 403) {
          this.errored = true;
          this.errorMessage = "Sorry, this group is unavailable.";
        } else if (res.status == 404) {
          this.errored = true;
          this.errorMessage = "Sorry, the id does not belong to any group.";
        }
      } catch (error) {
        console.error(error);
      }
    },
    async create() {
      try {
        const res = await axios.post("group/create", {
          studentId: this.userId,
          assignmentId: this.assignmentId,
        });
        if (res.status == 400) {
          this.errored = true;
          this.errorMessage = "Sorry, something happened.";
          return;
        }
        this.$emit("done");
      } catch (error) {
        console.error(error);
      }
    },
    async matchmake() {
      // try {
      //   const res = await axios.post("group/matchmake", {
      //     studentId: this.userId,
      //     assignmentId: this.assignmentId,
      //   });
      //   if (res.status == 200) {
      //   } else if (res.status == 400) {
      //   }
      // } catch (error) {
      //   console.error(error);
      // }
    },
    reset() {
      this.groupIdInput = "";
      this.errored = false;
      this.errorMessage = "Unknown Error Occurred!";
      this.$emit("grouped");
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
.err-msg
  margin-top: 5px
</style>

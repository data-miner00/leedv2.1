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
            .matchmake-btn(@click="matchmake")
              div
                v-icon mdi-nuxt
                span Matchmake
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
    assignNo: Number,
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
      // Removing try clause to get the response status

      const res = await axios.post(
        "group/join",
        {
          studentId: this.userId,
          groupId: this.groupIdInput,
          email: this.email,
          assignmentId: this.assignmentId,
        },
        { validateStatus: false }
      );

      if (res.status == 200) {
        this.$emit("done", {
          assignmentId: this.assignmentId,
          groupId: this.groupIdInput,
        });
        this.reset();
        this.$store.commit("showMessage", {
          text: "Join successful!",
          color: "success",
        });
      } else if (res.status == 403) {
        this.errored = true;
        this.errorMessage = "Sorry, this group is unavailable.";
      } else if (res.status == 404) {
        this.errored = true;
        this.errorMessage = "Sorry, the id does not belong to any group.";
      } else if (res.status == 400) {
        this.errored = true;
        this.errorMessage =
          "Sorry, the group does not belong to the same assignment.";
      }
    },
    async create() {
      try {
        const res = await axios.post("group/create", {
          studentId: this.userId,
          assignmentId: this.assignmentId,
          assignNo: this.assignNo,
        });

        //
        this.$emit("done", {
          assignmentId: this.assignmentId,
          groupId: res.data,
        });

        this.$store.commit("showMessage", {
          text: "Group created successfully!",
          color: "success",
        });
      } catch (error) {
        console.error(error);
      }
    },
    async matchmake() {
      try {
        await axios.post("group/matchmake", {
          studentId: this.userId,
          assignmentId: this.assignmentId,
          assignNo: this.assignNo,
          email: this.email,
        });

        this.$store.commit("showMessage", {
          text: "Successfully placed in queue!",
          color: "success",
        });
        this.$emit("done", {});
      } catch (error) {
        console.error(error);
      }
    },
    reset() {
      this.groupIdInput = "";
      this.errored = false;
      this.errorMessage = "Unknown Error Occurred!";
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
  color: crimson
.matchmake-btn
  width: 204.9px
  height: 40px
  display: grid
  place-items: center
  margin-bottom: 10px
  border: 1px solid #eee
  border-radius: 5px
  cursor: pointer
  &:hover
    background: #efe
</style>

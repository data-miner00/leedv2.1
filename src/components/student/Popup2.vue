<template lang="pug">
  .join-group
    v-card.px-4
      v-card-title Ways for New Group
      v-card-text
        .join.sec
          .llabel Join a group
          .dd Please provide a valid group ID to join.
          input.group-id-input(
            placeholder="Group Id"
            type="text"
            v-model="groupIdInput"
          )
          .join-btn.btn(@click="join")
            div
              v-icon mdi-at
              span Join
          .err-msg(v-if="errored") {{ errorMessage }}

        .create.sec
          .llabel Create a group
          .dd You will be the leader for this group.
          .create-btn.btn(@click="create")
            div
              v-icon mdi-account-multiple-plus
              span Create

        .matchmake.sec
          .llabel Matchmake with others
          .dd The system will arrange your group.
          .matchmake-btn.btn(@click="matchmake")
            div
              v-icon mdi-account-multiple
              span Matchmake
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
      if (this.groupIdInput === "") {
        this.errored = true;
        return (this.errorMessage = "Group ID cannot be empty!");
      }

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
.sec
  width: 100%
  margin-bottom: 40px
  .llabel
    font-size: 18px
    color: black
  .dd
    margin: 4px 0 16px
  .group-id-input
    outline: none
    width: 100%
    padding: 8px 10px
    border: 1px solid #eee
    border-radius: 5px
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
  .err-msg
    color: crimson
    font-weight: 600
</style>

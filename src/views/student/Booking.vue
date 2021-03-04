<template>
  <AssignmentLayout
    :courseCode="subjectCode"
    :courseName="subjectTitle"
    :assignNo="assignNo"
    purpose="Book a time"
  >
    <div class="booking">
      <div class="content-wrap">
        <div class="result-box">
          <div v-if="isConfirmed">
            The discussion is confirmed at 3PM - 5PM Saturday!
          </div>
          <div v-else>
            All members are required to provide suggestions for result!
          </div>
        </div>
        <div class="results-wrap">
          <BookListItem
            v-for="a in s"
            :key="a.id"
            :username="username"
            :userid="userid"
            :timeElapsed="timeElapsed"
            :selections="selections"
          />
          <BookListItem username="Doge" userid="1838333" timeElapsed="4 mins" />
        </div>
      </div>
    </div>
    <Popup />
  </AssignmentLayout>
</template>

<script>
import AssignmentLayout from "@/components/layouts/AssignInfo";
import BookListItem from "@/components/BookListItem";
import Popup from "@/components/Popup";
export default {
  components: {
    AssignmentLayout,
    BookListItem,
    Popup,
  },
  data: () => ({
    username: "Tiakong",
    userid: "@1848452",
    timeElapsed: "5 days ago",

    from: "00:00",
    to: "00:00",
    s: [1, 2, 3],
    selections: [
      {
        id: 1,
        day: "Monday",
        times: ["12-3pm", "8-9pm"],
      },
      {
        id: 2,
        day: "Thursday",
        times: ["8-10am", "7-9pm"],
      },
      {
        id: 3,
        day: "Saturday",
        times: ["Anytime"],
      },
    ],

    confirmedTime: "3PM - 5PM",
  }),
  computed: {
    isConfirmed() {
      return this.confirmedTime !== "";
    },
    groupId() {
      return this.$routes.params.id;
    },
    subjectCode() {
      return this.$store.state.assignment.subjectCode;
    },
    subjectTitle() {
      return this.$store.state.assignment.subjectTitle;
    },
    assignNo() {
      return this.$store.state.assignment.assignNo;
    },
  },
};
</script>

<style lang="sass" scoped>
.booking
  height: 100%
  padding: 150px 0
  .content-wrap
    margin: 0 auto
    width: 100%

    .result-box
      background: #eee
      text-align: center
      height: 200px
      width: 45%
      margin: 0 auto
      border-radius: 250px
      display: grid
      place-items: center
      box-shadow: 2px 2px 30px rgb(0 0 0 / 20%)
      div
        width: fit-content
        font-weight: 800
        font-size: 19px

.results-wrap
  margin-top: 70px
</style>

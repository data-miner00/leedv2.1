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
            The discussion is confirmed at {{ confirmedTime.startTime }} -
            {{ confirmedTime.endTime }} {{ confirmedTime.day }}!
          </div>
          <div v-else>
            All members are required to provide suggestions for result!
          </div>
        </div>
        <div class="results-wrap">
          <BookListItem
            v-for="data in bookingData"
            :key="data.memberId"
            :username="studentAvatarMap[data.memberId].name"
            :avatarUri="studentAvatarMap[data.memberId].avatarUri"
            :userid="data.memberId"
            :timeElapsed="timestampToDate(data.updatedAt)"
            :sunday="data.sunday || {}"
            :monday="data.monday || {}"
            :tuesday="data.tuesday || {}"
            :wednesday="data.wednesday || {}"
            :thursday="data.thursday || {}"
            :friday="data.friday || {}"
            :saturday="data.saturday || {}"
          />
        </div>
      </div>
    </div>
    <Popup :groupId="groupId" />
  </AssignmentLayout>
</template>

<script>
import AssignmentLayout from "@/components/layouts/AssignInfo";
import BookListItem from "@/components/BookListItem";
import Popup from "@/components/Popup";
import axios from "axios";
export default {
  components: {
    AssignmentLayout,
    BookListItem,
    Popup,
  },
  data: () => ({
    bookingData: [],
    studentAvatarMap: {},
    confirmedTime: {},
  }),
  async mounted() {
    let membersId;

    try {
      const res = await axios.get(`group/${this.groupId}`);
      membersId = [res.data.leaderId, res.data.membersId].flat();
      this.confirmedTime = res.data.confirmedTime;
      console.log(membersId);
    } catch (error) {
      console.error(error);
    }

    //
    try {
      const res = await axios.get(`group/${this.groupId}/booking`);
      this.bookingData = res.data;
      console.log(this.bookingData);
    } catch (error) {
      console.error(error);
    }

    try {
      const res = await axios.post("student/avatar", membersId);
      this.studentAvatarMap = res.data;
      console.log(this.studentAvatarMap);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    timestampToDate({ seconds, nanoseconds }) {
      const date = new Date(seconds * 1e3 + nanoseconds / 1e6);
      return `March ${date.getDate()}, ${date.getFullYear()}`;
    },
  },
  computed: {
    isConfirmed() {
      return this.confirmedTime !== null;
    },
    groupId() {
      return this.$route.params.groupId;
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

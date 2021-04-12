<template>
  <div>
    <div class="misc-time-info">
      <div class="date-info">
        <v-icon>mdi-calendar-multiple</v-icon>
        {{ date }},
        <span>{{ day }}</span>
      </div>
      <div class="week-info">Week {{ week }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    week: 1,
  }),
  async mounted() {
    try {
      const res = await axios.get("week");
      this.week = res.data.serverWeek;
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    date() {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const fullDateToday = new Date();
      const dateToday = fullDateToday.getDate();
      const monthToday = fullDateToday.getMonth();

      return `${months[monthToday]} ${dateToday}`;
    },
    day() {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      const fullDateToday = new Date();
      const dayToday = fullDateToday.getDay();

      return `${days[dayToday]}`;
    },
  },
};
</script>

<style lang="sass" scoped>
.misc-time-info
  margin-top: 10px
  background: rgb(247, 249, 250)
  width: 100%
  border-radius: 15px
  padding: 15px
  display: flex
  justify-content: space-between

  .date-info
    font-weight: 700
    padding: 4px 10px

    span
      color: #666

  .week-info
    background: white
    padding: 4px 10px
    border-radius: 50px
    font-weight: 900
    font-size: 14px
</style>

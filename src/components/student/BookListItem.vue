<template lang="pug">
  .member-choice
    .verified(v-if="verified")
      .icon
        .inner
          v-icon mdi-check-bold
      .description User has placed his/her bookings
    .another-wrapper
      v-avatar(:size="49")
        img(:src="avatarUri" :alt="username")
      .member-selections
        .thread-info
          div
            span
              span.name {{ username }}
              | &nbsp;&nbsp;
              span.userid @{{ userid }}
              | &nbsp;&nbsp;
              span ·
              | &nbsp;&nbsp;
              span.time-elapsed {{ timeElapsed }}
          .action-icon
            v-icon mdi-account-question
        .member-selection-wrap(v-if="hasSelected")
          .member-selection(v-for="day in days" :key="Math.random()")
            .day {{ day.day }}
            .ntg available at
            .time {{ day.time.startTime }} &mdash; {{ day.time.endTime }}
        .member-selection-empty(v-else)
          | This member has not selected any time yet!!
</template>

<script>
import { isEmpty } from "@/utils";

export default {
  props: {
    username: String,
    userid: String,
    timeElapsed: String,
    avatarUri: String,
    sunday: Object,
    monday: Object,
    tuesday: Object,
    wednesday: Object,
    thursday: Object,
    friday: Object,
    saturday: Object,
  },
  mounted() {},
  computed: {
    verified() {
      return !(
        isEmpty(this.sunday) &&
        isEmpty(this.monday) &&
        isEmpty(this.tuesday) &&
        isEmpty(this.wednesday) &&
        isEmpty(this.thursday) &&
        isEmpty(this.friday) &&
        isEmpty(this.saturday)
      );
    },
    days() {
      return [
        {
          day: "Sunday",
          time: this.sunday,
        },
        {
          day: "Tuesday",
          time: this.tuesday,
        },
        {
          day: "Monday",
          time: this.monday,
        },
        {
          day: "Wednesday",
          time: this.wednesday,
        },
        {
          day: "Thursday",
          time: this.thursday,
        },
        {
          day: "Friday",
          time: this.friday,
        },
        {
          day: "Saturday",
          time: this.saturday,
        },
      ];
    },
    hasSelected() {
      return (
        this.sunday ||
        this.tuesday ||
        this.monday ||
        this.wednesday ||
        this.thursday ||
        this.friday ||
        this.saturday
      );
    },
  },
};
</script>

<style lang="sass" scoped>
.member-choice
  border: 1px solid #eee
  border-top: none
  padding: 2rem 15px
  width: fit-content
  min-width: 598px
  margin: 0 auto

  &:first-of-type
    border-top: 1px solid #eee

  .verified
    display: flex
    font-size: 13px
    font-weight: 800
    color: #5B7083
    align-items: center

    .icon
      width: 49px
      .inner
        margin-left: auto
        width: fit-content
        i
          color: inherit
          font-size: 17px
    .description
      padding-left: 10px
  .another-wrapper
    display: flex

    .avatar-wrapper
      width: fit-content
      .avatar
        height: 49px
        width: 49px
        border-radius: 250px
        background: #eee
    .member-selections
      padding-left: 10px
      width: 100%
      .thread-info
        font-size: 15px
        margin-bottom: 5px
        display: flex
        justify-content: space-between
        div
          width: fit-content
          span
            .name
              font-weight: 700
            .userid
              color: #5b7083
            .time-elapsed
              color: #5b7083
        .action-icon
          width: fit-content
      .member-selection-wrap
        .member-selection
          width: 100%
          display: flex

          align-items: center
          .day
            width: fit-content
            font-size: 15px
            color: gray
            font-weight: 800

          .ntg
            margin: 0 1rem

          .time
            width: fit-content
            max-width: 300px
</style>

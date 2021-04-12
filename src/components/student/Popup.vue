<template>
  <v-dialog v-model="dialog" width="600">
    <template v-slot:activator="{ on, attrs }">
      <span v-bind="attrs" v-on="on" class="add-btn">
        Add Booking
      </span>
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2">
        Booking Discussion Time
      </v-card-title>

      <v-card-text>
        <div class="selector-wrapper">
          <div class="labb">
            Please select a day and a timeframe that you are available to
            proceed.
          </div>

          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-select
                :items="days"
                item-text="day"
                item-value="value"
                label="Day"
                v-model="selectedDay"
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field
                label="Start time"
                type="number"
                required
                :rules="fromRules"
                v-model="startTime"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field
                label="End time"
                type="number"
                :rules="toRules"
                required
                v-model="endTime"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">
          Cancel
        </v-btn>
        <v-btn color="primary" text @click="confirmTime">
          Confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  props: {
    groupId: String,
  },
  data() {
    return {
      dialog: false,
      startTime: 0,
      endTime: 24,
      selectedDay: "sunday",
      days: [
        {
          day: "Sunday",
          value: "sunday",
          valueAlt: 0,
        },
        {
          day: "Monday",
          value: "monday",
          valueAlt: 1,
        },
        {
          day: "Tuesday",
          value: "tuesday",
          valueAlt: 2,
        },
        {
          day: "Wednesday",
          value: "wednesday",
          valueAlt: 3,
        },
        {
          day: "Thursday",
          value: "thursday",
          valueAlt: 4,
        },
        {
          day: "Friday",
          value: "friday",
          valueAlt: 5,
        },
        {
          day: "Saturday",
          value: "saturday",
          valueAlt: 6,
        },
      ],
    };
  },
  methods: {
    async confirmTime() {
      try {
        await axios.post(`group/${this.groupId}/booking`, {
          memberId: this.userId,
          startTime: Number(this.startTime),
          endTime: Number(this.endTime),
          day: this.selectedDay,
        });
      } catch (error) {
        console.error(error);
      }
      this.dialog = false;
    },
  },
  computed: {
    fromRules() {
      return [
        (v) => !!v || "This field is required",
        (v) => (v && v <= 24) || "Cannot be bigger than 24",
        (v) => (v && v >= 0) || "Cannot be negative",
        (v) =>
          (v && v < Number(this.endTime)) || "Cannot be larger than End time",
      ];
    },
    toRules() {
      return [
        (v) => !!v || "This field is required",
        (v) => (v && v <= 24) || "Cannot be bigger than 24",
        (v) => (v && v >= 0) || "Cannot be negative",
        (v) =>
          (v && v > Number(this.startTime)) ||
          "Cannot be smaller than Start time",
      ];
    },
    userId() {
      return this.$store.state.user.userId;
    },
  },
};
</script>

<style lang="sass" scoped>
.add-btn
  position: fixed
  top: 5px
  right: 40vw
  z-index: 2
  background: #eee
  border-radius: 25px
  padding: 10px 15px
  cursor: pointer
</style>

<template>
  <v-dialog v-model="dialog" width="800">
    <template v-slot:activator="{ on, attrs }">
      <v-icon
        color="red lighten-2"
        class="add-btn"
        dark
        v-bind="attrs"
        v-on="on"
      >
        mdi-flower-tulip
      </v-icon>
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2">
        Booking Discussion Time
      </v-card-title>

      <v-card-text>
        <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. -->
        <div class="selector-wrapper">
          <div class="labb">
            Please select at least a day and a timeframe to proceed.
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
        <v-btn color="primary" text @click="confirmTime">
          I accept
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
    addedTime() {
      // this.$emit('added', {});
    },
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
  top: 15px
  right: 24px
</style>

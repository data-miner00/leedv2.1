<template>
  <AssignmentLayout
    :courseCode="subjectCode"
    :courseName="subjectTitle"
    :assignNo="assignNo"
    purpose="Project Plan"
  >
    <div class="management-content">
      <div class="new-task" @click="openDialog">
        <!---->
        <div class="new-task-icon"><v-icon>mdi-newspaper-plus</v-icon></div>
        <div class="new-task-label">New Task</div>
      </div>
      <table>
        <!-- <v-simple-table
        ><template v-slot:default> -->
        <thead>
          <tr>
            <th>No.</th>
            <th class="activities">Project Activities</th>
            <th class="planned">Planned Completion Date</th>
            <th>W1</th>
            <th>W2</th>
            <th>W3</th>
            <th>W4</th>
            <th>W5</th>
            <th>W6</th>
            <th>W7</th>
            <th>W8</th>
            <th>W9</th>
            <th>W10</th>
            <th>W11</th>
            <th>W12</th>
            <th>W13</th>
            <th>W14</th>
            <th>W15</th>
            <th>W16</th>
            <th>W17</th>
          </tr>
        </thead>
        <tbody>
          <GanttItem
            v-for="(item, index) in gantts"
            :key="index"
            :index="index"
            :description="item.description"
            :dateOfCompletion="item.dateOfCompletion"
            :from="item.from"
            :until="item.until"
          />
        </tbody>
        <!-- </template
      ></v-simple-table> -->
      </table>
    </div>
    <div class="legends">
      //
    </div>

    <ReturnBtn />

    <v-dialog v-model="isDialogOpen" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Add a New Activity
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Activity" required></v-text-field>
              </v-col>

              <!-- <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col> -->
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="From week"
                  required
                  type="number"
                  :rules="weekInputRules"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="To week"
                  type="number"
                  required
                  :rules="weekInputRules"
                ></v-text-field>
              </v-col>
              <!-- <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="[
                    'Skiing',
                    'Ice hockey',
                    'Soccer',
                    'Basketball',
                    'Hockey',
                    'Reading',
                    'Writing',
                    'Coding',
                    'Basejump',
                  ]"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col> -->

              <v-col cols="12">
                <div class="title">Self-set deadline</div>
                <v-date-picker v-model="picker"></v-date-picker>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="isDialogOpen = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="saveActivity">
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </AssignmentLayout>
</template>

<script>
import GanttItem from "@/components/GanttItem";
import ReturnBtn from "@/components/ReturnBtn";
import AssignmentLayout from "@/components/layouts/AssignInfo";
export default {
  components: {
    GanttItem,
    ReturnBtn,
    AssignmentLayout,
  },
  data: () => ({
    picker: new Date().toISOString().substr(0, 10),
    gantts: [
      {
        description: "Build domething cool",
        dateOfCompletion: "12-3-2012",
        from: 1,
        until: 2,
      },
      {
        description: "Build domething cool",
        dateOfCompletion: "12-3-2012",
        from: 1,
        until: 2,
      },
      {
        description: "Build domething cool",
        dateOfCompletion: "12-3-2012",
        from: 2,
        until: 5,
      },
      {
        description: "Build domething cool",
        dateOfCompletion: "12-3-2012",
        from: 4,
        until: 8,
      },
      {
        description: "Build domething cool",
        dateOfCompletion: "12-3-2012",
        from: 6,
        until: 9,
      },
      {
        description: "Build domething cool",
        dateOfCompletion: "12-3-2012",
        from: 6,
        until: 7,
      },
      {
        description: "Build domething cool",
        dateOfCompletion: "12-3-2012",
        from: 9,
        until: 9,
      },
      {
        description: "Build domething cool",
        dateOfCompletion: "12-3-2012",
        from: 9,
        until: 12,
      },
    ],
    isDialogOpen: false,
    weekInputRules: [
      (v) => !!v || "This field is required",
      (v) => (v && v > 0) || "The week must not be smaller than 1",
      (v) => (v && v <= 17) || "The week must not be bigger than 17",
    ],
  }),
  mounted() {
    //
  },
  methods: {
    openDialog() {
      this.isDialogOpen = true;
    },
    saveActivity() {
      this.isDialogOpen = false;
      // code to commit action
    },
  },
  computed: {
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
@import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;800&display=swap')

.management-content
  width: fit-content
  margin: auto

  .new-task
    display: flex
    padding: 5px 15px
    width: fit-content
    background: #eee
    color: black
    align-items: center
    border-radius: 250px
    margin-left: auto
    box-shadow: 2px 2px 5px rgb(0 0 0 / 20%)
    cursor: pointer

    i
      color: black

    &-label
      margin-left: 10px

  thead
    background: #eee

  table
    border: 1px solid #eee
    border-radius: 5px
    box-shadow: 2px 2px 30px rgb(0 0 0 / 20%)
    margin-top: 20px

  th, td
    padding: 8px

  .activities
    width: 264px
    height: 60px
    //
  .planned
    width: 94px
    height: 60px

.information
  width: fit-content
  margin: auto
  text-align: center

  .icon
    text-transform: uppercase
    font-size: 30px
    font-family: 'Shippori Mincho', serif
    font-weight: 800
    letter-spacing: 5px

  .subject
    font-size: 25px
    margin: 25px 0

    div
      font-size: 14px
      font-weight: 800
      padding: 6px 8px

.addTaskDialog
  background: white
</style>

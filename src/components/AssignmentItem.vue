<template>
  <div class="wrapper">
    <div class="horizontal-group">
      <div class="course-code">{{ courseCode }}</div>
      <div class="horizontal-group-2">
        <div class="course-name">{{ courseName }}</div>
        <div class="assign-no">{{ assignNo }}</div>
      </div>
    </div>
    <div class="link-wrapper">
      <router-link
        v-if="hasGroup"
        :to="{ name: 'Workspace', params: { groupId } }"
        @click.native="setThisDetails"
      >
        <div class="link-icon">
          <v-icon>mdi-star-four-points</v-icon>
        </div>
      </router-link>
      <div class="link-icon create-or-join" v-else @click="dialog = true">
        <v-icon>mdi-star-four-points-outline</v-icon>
      </div>
      <div class="link-icon">
        <v-icon>mdi-nuxt</v-icon>
      </div>

      <router-link
        :to="{ name: 'Details', params: { groupId } }"
        v-if="hasGroup"
        @click.native="setThisDetails"
      >
        <div class="link-icon">
          <v-icon>mdi-information-outline</v-icon>
        </div>
      </router-link>
      <div class="link-icon" v-else>
        <v-icon>mdi-information</v-icon>
      </div>
    </div>
    <v-dialog v-model="dialog" width="500">
      <Popup2 :assignmentId="assignmentId" />
    </v-dialog>
  </div>
</template>

<script>
import Popup2 from "@/components/Popup2";
export default {
  components: {
    Popup2,
  },
  props: {
    courseCode: String,
    courseName: String,
    assignNo: Number,
    assignDescription: String,
    groupId: String,
    assignmentId: String,
    language: String,
  },
  data: () => ({
    dialog: false,
  }),
  mounted() {
    console.log(this.hasGroup);
    console.log(this.groupId);
  },
  methods: {
    setThisDetails() {
      // this.$store.dispatch("SELECT_WORKSPACE", {
      //   subjectCode: this.courseCode,
      //   subjectTitle: this.courseName,
      //   assignNo: this.assignNo,
      //   groupId: this.groupId,
      //   language: this.language,
      //   // maybe set assignmentId to store too? (yes)
      //   assignmentId: this.assignmentId,
      // });
    },
  },
  computed: {
    hasGroup() {
      return (
        this.groupId != null && this.groupId != "" && this.groupId != undefined
      );
    },
  },
};
</script>

<style lang="sass" scoped>
.wrapper
  padding: 15px
  border-bottom: 1px solid #eee
  display: flex
  align-items: center
  justify-content: space-between

  .horizontal-group

    .course-code
      font-weight: 600
      font-size: 13px

    .horizontal-group-2
      display: flex
      align-items: center
      .assign-no
        font-size: 8px
        padding: 3px 10px
        background: #eee
        border-radius: 25px
        margin-left: 5px

  .link-wrapper
    display: flex
    justify-content: space-between
    width: 80px

    .create-or-join
      cursor: pointer
</style>

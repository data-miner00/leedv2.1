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
      >
        <div class="link-icon workspace">
          <v-icon>mdi-star-four-points</v-icon>
        </div>
      </router-link>
      <div class="link-icon create-or-join" v-else @click="dialog = true">
        <v-icon>mdi-star-four-points-outline</v-icon>
      </div>

      <router-link
        :to="{ name: 'Details', params: { groupId } }"
        v-if="hasGroup"
      >
        <div class="link-icon infor">
          <v-icon>mdi-information</v-icon>
        </div>
      </router-link>
      <div class="link-icon" v-else>
        <v-icon>mdi-information-outline</v-icon>
      </div>

      <div class="link-icon download" v-if="filename">
        <a :href="downloadLink" target="_blank">
          <v-icon>mdi-download</v-icon>
        </a>
      </div>

      <div class="link-icon no-download" v-else>
        <v-icon>mdi-download-outline</v-icon>
      </div>
    </div>
    <v-dialog v-model="dialog" width="500">
      <Popup2
        :assignmentId="assignmentId"
        :assignNo="assignNo"
        @done="handlebars"
      />
    </v-dialog>
  </div>
</template>

<script>
import config from "../../config";

import Popup2 from "./Popup2";

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
    filename: String,
  },
  data: () => ({
    dialog: false,
  }),
  mounted() {
    console.log(this.hasGroup);
    console.log(this.groupId);
  },
  computed: {
    hasGroup() {
      return (
        this.groupId != null && this.groupId != "" && this.groupId != undefined
      );
    },
    downloadLink() {
      // Assignment question
      return `${config.url}/assignment/question/${this.filename}`;
    },
  },
  methods: {
    // Mediator of data from grandchild to parent
    handlebars(evt) {
      this.$emit("update", evt);
      this.dialog = false;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/_mixins"
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
    justify-content: flex-end


    .link-icon
      border-radius: 999px
      padding: 4px 5px

      @include tooltip-helper
      &.create-or-join
        cursor: pointer
        @include tooptip("Create/Join", -35px)
      &.workspace
        @include tooptip("Workspace", -35px)
      &.infor
        @include tooptip("Info")
      &.download
        @include tooptip("Download question", -55px)
      &.no-download
        @include tooptip("Question unavailable", -65px)
</style>

<template lang="pug">
  v-card.px-4
    v-card-title Create an Assignment
    v-card-text 
      .grouped
        .lable Description
        .description
          input(type="text" v-model="description")
        .lable Select course
        v-select(:items="courseCodes" v-model="selectedCourse" )
        .lable Select programming language
        v-select(:items="languages" item-text="name" item-value="value" v-model="selectedLanguage")
        .lable Maximum students per group
        .max-student
          input(type="number" min="2" v-model="maxStudent")
        .lable Assignment no.
        .assign-no
          input(type="number" min="1" v-model="assignNo")
        .lable Due date
        v-date-picker(v-model="dueDate")/
    v-divider
    v-card-actions
      v-spacer
      v-btn(color="blue darken-1" text @click="close") Cancel
      v-btn(color="blue darken-1" text @click="addAssignment") Confirm
</template>

<script>
import axios from "axios";
export default {
  props: {
    //
  },
  data: () => ({
    //
    courseCodes: [],
    //
    description: "",
    maxStudent: null,
    selectedCourse: "",
    selectedLanguage: "",
    dueDate: new Date().toISOString().substr(0, 10),
    assignNo: null,
  }),
  async mounted() {
    try {
      const res = await axios.get(`/lecturer/${this.userId}/subjects`);
      this.courseCodes = res.data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async addAssignment() {
      try {
        await axios.post(`/assignment`, {
          assignNo: Number(this.assignNo),
          description: this.description,
          dueDate: this.dueDate,
          language: this.selectedLanguage,
          maxStudent: Number(this.maxStudent),
          subjectCode: this.selectedCourse,
        });
        this.close();
      } catch (error) {
        console.error(error);
      }
    },
    close() {
      this.$emit("close");
    },
  },
  computed: {
    //
    userId() {
      return this.$store.state.user.userId;
    },
    languages() {
      return [
        { name: "C#", value: "csharp" },
        { name: "Javascript", value: "javascript" },
        { name: "Java", value: "java" },
        { name: "C++", value: "cpp" },
        { name: "C", value: "c" },
        { name: "Haskell", value: "haskell" },
        { name: "Swift", value: "swift" },
        { name: "PHP", value: "php" },
        { name: "R", value: "r" },
        { name: "Go", value: "go" },
        { name: "HTML", value: "html" },
        { name: "Typescript", value: "typescript" },
      ];
    },
  },
};
</script>

<style lang="sass" scoped>
//

input
  padding: 5px 0
  border-bottom: 1px solid rgba(0, 0, 0, 0.66)
  margin: 5px 0 10px
  width: 100%
  outline: none
</style>

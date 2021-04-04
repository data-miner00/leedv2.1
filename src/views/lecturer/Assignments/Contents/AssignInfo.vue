<template lang="pug">
  .assign-info
    .page-description
      | This is a author view of the assginment details page. Lorem ipsum dolor sit amet,
      | adispicing valet.
    .section-divider
    Loader(v-if="loading")
    .details-section(v-else)
      .assign-title {{ subjectCode }} {{ subjectTitle }} A{{ assignNo }}
      .details
        .infos
          .infos-item
            .icon
              v-icon mdi-card-bulleted-outline
            .right
              .label Assignment ID
              .description {{ assignmentId }}
          .infos-item
            .icon
              v-icon mdi-post-outline
            .right
              .label Description
              .description
                input.desc(type="text" v-model="description")
          .infos-item
            .icon
              v-icon mdi-calendar-alert
            .right
              .label Due Date
              .description
                input.desc(type="text" v-model="dueDate" placeholder="YYYY-MM-DD")
  
          .infos-item
            .icon
              v-icon {{ languageIcon }}
            .right
              .label Programming Language
              .description
                select(v-model="language")
                  option(
                    v-for="lang in languages"
                    :key="lang.value"
                    :value="lang.value"
                  ) {{ lang.name }}
          
          .infos-item
            .icon
              v-icon mdi-card-bulleted-outline
            .right
              .label Group Capacity
              .description
                input.desc(type="text" v-model="maxStudent" min="2")
          .save-btn(@click="updateDetails") Save

        v-alert(
          v-if="isSuccess"
          dense
          text
          type="success"
        ) The details of the assignment with ID #[strong {{ assignmentId }}] has been updated #[strong successfully]!
        v-alert(
          v-if="isError"
          dense
          text
          type="error"
        ) An unexpected error has been occurred. The update for assignment #[strong {{ assignmentId }}] has not been successful!
      .assign-title Assignment Question File
      .filename 
        .content(v-if="filename") #[a(:href="filepath" target="_blank") {{ filename }}]
        .content(v-else) No question file has been uploaded. 
      .upload-btn
        .up Assignment upload: #[input(type="file" id="file" ref="file" v-on:change="uploadQuestion")/]
        
</template>

<script>
import axios from "axios";
import config from "@/config";

import Loader from "@/components/Loader";

export default {
  //
  components: {
    Loader,
  },
  data: () => ({
    loading: true,

    assignNo: 1,
    description: "A sample lorem itsum description.",
    dueDate: "2012/05/20",
    language: "javascript",
    maxStudent: 2,
    subjectCode: "UECS1234",
    subjectTitle: "Fallback",
    filename: "",
    isSuccess: false,
    isError: false,
    file: "",
  }),
  async mounted() {
    try {
      const res = await axios.get(`assignment/${this.assignmentId}`);
      this.assignNo = res.data.assignNo;
      this.description = res.data.description;
      this.dueDate = res.data.dueDate;
      this.language = res.data.language;
      this.maxStudent = res.data.maxStudent;
      this.subjectCode = res.data.subjectCode;
      this.filename = res.data.filename;

      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async updateDetails() {
      try {
        await axios.patch(`assignment/${this.assignmentId}`, {
          description: this.description,
          dueDate: this.dueDate,
          language: this.language,
          maxStudent: Number(this.maxStudent),
        });
        this.isSuccess = true;
      } catch (error) {
        this.isError = true;
        console.error(error);
      }
    },
    async uploadQuestion() {
      try {
        this.file = this.$refs.file.files[0];
        let formData = new FormData();
        formData.append("quest", this.file, this.file.name);
        await axios.post(
          `assignment/${this.assignmentId}/upload/ques`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        this.filename = this.file.name;
        console.log("success!");
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    assignmentId() {
      return this.$route.params.assignmentId;
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
    languageIcon() {
      switch (this.language.toLowerCase()) {
        case "csharp":
          return "mdi-language-csharp";
        case "cpp":
          return "mdi-language-cpp";
        case "c":
          return "mdi-language-c";
        case "python":
          return "mdi-language-python";
        case "java":
          return "mdi-language-java";
        case "javascript":
          return "mdi-language-javascript";
        case "php":
          return "mdi-language-php";
        case "swift":
          return "mdi-language-swift";
        case "go":
          return "mdi-language-go";
        case "haskell":
          return "mdi-language-haskell";
        case "r":
          return "mdi-language-r";
        case "html":
          return "mdi-language-html5";
        case "typescript":
          return "mdi-language-typescript";
        default:
          return "mdi-music-clef-treble";
      }
    },
    filepath() {
      return config.url + "/assignment/question/" + this.filename;
    },
  },
};
</script>

<style lang="sass" scoped>
//
.assign-info
  position: relative
.assign-title
  font-size: 19px
  font-weight: 800
  text-align: center
  padding: 10px
  border-bottom: 1px solid #eee
.details
  border-bottom: 1px solid #eee
  .infos
    padding: 10px 15px

    .icon
      height: 60px
      width: 60px
      display: grid
      place-items: center

    &-item
      display: flex
      max-width: 80%
      margin: 0 auto

      .right
        height: fit-content
        margin: auto 0
        color: #041419

        .label
          font-size: 13px
          color: #5b7083
input.desc
  width: 450px
  border-bottom: 1px solid #eee
  outline: none
.save-btn
  border: 1px solid #eee
  padding: 10px 16px
  width: fit-content
  margin: 20px 90px 20px auto
  cursor: pointer
  transition: background 0.2s
  &:hover
    background: #eee
.inner
  padding: 20px
  text-align: center
  font-size: 16px

.filename
  display: grid
  place-items: center
  height: 200px
  border-bottom: 1px solid #eee
  .content
    width: fit-content
.upload-btn
  padding: 10px 15px
  border-bottom: 1px solid #eee
  input
    width: fit-content
</style>

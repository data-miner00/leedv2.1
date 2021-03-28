<template lang="pug">
  .assign-info
    .page-description
      | This is a author view of the assginment details page. Lorem ipsum dolor sit amet,
      | adispicing valet.
    .section-divider
    .details-section
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
        
</template>

<script>
// import axios from "axios";
export default {
  //
  data: () => ({
    assignNo: 1,
    description: "A sample lorem itsum description.",
    dueDate: "2012/05/20",
    language: "javascript",
    maxStudent: 2,
    subjectCode: "UECS1234",
    subjectTitle: "Fallback",
  }),
  async mounted() {
    // try {
    //   const res = await axios.get(`assignment/${this.assignmentId}`);
    //   this.assignNo = res.data.assignNo;
    //   this.description = res.data.description;
    //   this.dueDate = res.data.dueDate;
    //   this.language = res.data.language;
    //   this.maxStudent = res.data.maxStudent;
    //   this.subjectCode = res.data.subjectCode;
    // } catch (error) {
    //   console.error(error);
    // }
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
  },
};
</script>

<style lang="sass" scoped>
//
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
</style>

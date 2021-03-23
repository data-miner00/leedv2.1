<template lang="pug">
  .resources
    .page-description
      | These are all the useful and popular applications and services 
      | that might be helpful on your programming journey with friends. 
      | Utilizing these resources vicely will get your job done in just 
      | matter of seconds. The resources are categorized for easier 
      | recognition, most important of all, they are free!
    .section-divider
    ResourceItem(title="Search Engine" :websites="searchEngines")/
    ResourceItem(title="Screencasts" :websites="screencasts")/
    ResourceItem(title="Web Technologies" :websites="webTechnologies")/
    ResourceItem(title="Blogs & Articles" :websites="blogsArticles")/
    ResourceItem(title="Design & Prototyping" :websites="design")/
    ResourceItem(title="Source Control" :websites="sourceControl")/
    ResourceItem(title="Data Science" :websites="dataScience")/
    ResourceItem(title="Discussion Forums" :websites="forums")/
    //- ResourceItem(title="Mobile Development" :websites="mobileDev")/
    ResourceItem(title="Documentations" :websites="documentations")/
    //- ResourceItem(title="Game Development" :websites="gameDev")/
</template>

<script>
import ResourceItem from "@/components/student/ResourceItem";
export default {
  components: {
    ResourceItem,
  },
  computed: {
    searchEngines() {
      return [
        {
          icon: "google",
          name: "Google",
          url: "https://www.google.com",
        },
        {
          icon: "yahoo",
          name: "Yahoo",
          url: "https://www.yahoo.com",
        },
        {
          icon: "yandex-international",
          name: "Yandex",
          url: "https://www.yandex.com",
        },
      ];
    },
    screencasts() {
      return [
        {
          icon: "youtube",
          name: "Youtube",
          url: "https://www.youtube.com",
        },
      ];
    },
    webTechnologies() {
      return [
        {
          icon: "react",
          name: "React",
          url: "https://www.youtube.com",
        },
        {
          icon: "angular",
          name: "Angular",
          url: "https://www.youtube.com",
        },
        {
          icon: "vuejs",
          name: "Vue",
          url: "https://www.youtube.com",
        },
        {
          icon: "laravel",
          name: "Laravel",
          url: "https://www.youtube.com",
        },
        {
          icon: "sass",
          name: "Sass",
          url: "https://www.youtube.com",
        },
      ];
    },
    blogsArticles() {
      return [
        {
          icon: "dev",
          name: "Dev.to",
          url: "https://www.youtube.com",
        },
        {
          icon: "medium-m",
          name: "Medium",
          url: "https://www.youtube.com",
        },
        {
          icon: "diaspora",
          name: "CSS Tricks",
          url: "https://www.youtube.com",
        },
      ];
    },
    design() {
      return [
        {
          icon: "figma",
          name: "Figma",
          url: "https://www.youtube.com",
        },
      ];
    },
    sourceControl() {
      return [
        {
          icon: "github",
          name: "Github",
          url: "https://www.youtube.com",
        },
      ];
    },
    dataScience() {
      return [
        {
          icon: "kaggle",
          name: "Kaggle",
          url: "https://www.kaggle.com",
        },
        {
          icon: "r-project",
          name: "R",
          url: "https://www.kaggle.com",
        },
      ];
    },
    forums() {
      return [
        {
          icon: "quora",
          name: "Quora",
          url: "https://www.kaggle.com",
        },
        {
          icon: "stack-overflow",
          name: "Stack Overflow",
          url: "https://www.kaggle.com",
        },
        {
          icon: "stack-exchange",
          name: "Stack Exchange",
          url: "https://www.kaggle.com",
        },
      ];
    },
    documentations() {
      return [
        {
          icon: "java",
          name: "Java",
          url: "https://www.kaggle.com",
        },
        {
          icon: "js",
          name: "Javascript",
          url: "https://www.kaggle.com",
        },
        {
          icon: "swift",
          name: "Swift",
          url: "https://www.kaggle.com",
        },
        {
          icon: "unity",
          name: "Unity",
          url: "https://www.kaggle.com",
        },
      ];
    },
  },
};
</script>

<style lang="sass" scoped></style>

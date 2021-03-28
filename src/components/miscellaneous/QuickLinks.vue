<template>
  <div class="quick-links">
    <MiscItemWrapper>
      <div class="quick-links-title">
        <span>Quick Links</span>
      </div>
    </MiscItemWrapper>
    <MiscItemWrapper v-for="item in items" :key="item.icon" onmouseenter>
      <QuickLinkItem
        :icon="item.icon"
        :brand="item.brand"
        :type="item.type"
        :url="item.url"
      />
    </MiscItemWrapper>
    <router-link to="/s/resources" @click.native="setHeader">
      <MiscItemWrapper last>
        <span class="show-more">Show More</span>
      </MiscItemWrapper>
    </router-link>
  </div>
</template>

<script>
import MiscItemWrapper from "./MiscItemWrapper";
import QuickLinkItem from "./QuickLinkItem";
export default {
  components: {
    MiscItemWrapper,
    QuickLinkItem,
  },
  data: () => ({
    items: [
      {
        icon: "google",
        brand: "Google",
        type: "Search Engine",
        url: "https://www.google.com",
      },
      {
        icon: "youtube",
        brand: "Youtube",
        type: "Video Tutorials",
        url: "https://www.youtube.com",
      },
      {
        icon: "github",
        brand: "GitHub",
        type: "Code Repository",
        url: "https://www.github.com",
      },
      {
        icon: "stack-overflow",
        brand: "Stack Overflow",
        type: "Discussion Forum",
        url: "https://stackoverflow.com/",
      },
      {
        icon: "medium",
        brand: "Medium",
        type: "Articles",
        url: "https://medium.com/",
      },
      {
        icon: "gitlab",
        brand: "GitLab",
        type: "Code Repository",
        url: "https://gitlab.com/",
      },
      {
        icon: "kaggle",
        brand: "Kaggle",
        type: "Data Science",
        url: "https://kaggle.com/",
      },
      {
        icon: "stack-exchange",
        brand: "Stack Exchange",
        type: "Discussion Forum",
        url: "https://stackexchange.com/",
      },
    ],
  }),
  methods: {
    setHeader() {
      this.$store.commit("setCurrentPage", "Resources");
    },
  },
};
</script>

<style lang="sass" scoped>
.quick-links
  margin-top: 20px
  background: rgb(247, 249, 250)
  width: 100%
  border-radius: 15px

  &-title
    font-size: 19px
    font-weight: 800

.show-more
  color: #794BC4
</style>

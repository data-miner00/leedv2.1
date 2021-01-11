<template>
  <div class="quick-links">
    <MiscItemWrapper>
      <div class="quick-links-title">
        <span>Quick Links</span>
      </div>
    </MiscItemWrapper>
    <MiscItemWrapper 
      v-for="item in items" 
      :key="item.icon"
      onmouseenter>
      <QuickLinkItem 
        :icon="item.icon"
        :brand="item.brand"
        :type="item.type"
        :url="item.url"/>
    </MiscItemWrapper>
    <MiscItemWrapper last>
      Show More
    </MiscItemWrapper>
  </div> 
</template>

<script>
import MiscItemWrapper from './MiscItemWrapper';
import QuickLinkItem from './QuickLinkItem'
export default {
  components: {
    MiscItemWrapper,
    QuickLinkItem
  },
  data: () => ({
    items: [
      {
        icon: 'google',
        brand: 'Google',
        type: 'Search Engine',
        url: ''
      },
      {
        icon: 'youtube',
        brand: 'Youtube',
        type: 'Video Tutorials',
        url: ''
      },
      {
        icon: 'github',
        brand: 'GitHub',
        type: 'Code Repository',
        url: ''
      },
      {
        icon: 'stack-overflow',
        brand: 'Stack Overflow',
        type: 'Discussion Forum',
        url: ''
      },
      {
        icon: 'medium',
        brand: 'Medium',
        type: 'Articles',
        url: ''
      },
      {
        icon: 'gitlab',
        brand: 'GitLab',
        type: 'Code Repository',
        url: ''
      },
      {
        icon: 'kaggle',
        brand: 'Kaggle',
        type: 'Data Science',
        url: ''
      },
      {
        icon: 'stack-exchange',
        brand: 'Stack Exchange',
        type: 'Discussion Forum',
        url: ''
      },
    ]
  })
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
</style>
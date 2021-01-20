<template>
  <ContentWrapper>
    <SectionWrapper title="Timeline">
      <div class="wrapper">
        <Temp
          avatarUrl="https://pbs.twimg.com/profile_images/1290912380839276544/xLYkWoSf_400x400.jpg"
          username="Dandelion"
          userid="@1903151"
          timeElapsed="2 hours"
          threadContent="Hello World! Hello World! Hello World!"
        />
        <Temp
          avatarUrl="https://pbs.twimg.com/profile_images/1294987365262360576/cufzUZwB_400x400.jpg"
          username="Janice"
          userid="@1854321"
          timeElapsed="1 day"
          threadContent="Testing !!"
        />
      </div>
    </SectionWrapper>
    <SectionWrapper title="Upcoming">
      <div class="wrapper">
        <div class="wrapper-item">There are no upcoming activities.</div>
      </div>
    </SectionWrapper>
    <SectionWrapper title="Tasks">
      <div class="wrapper">
        <div class="wrapper-item">There are no upcoming activities.</div>
      </div>
    </SectionWrapper>
  </ContentWrapper>
</template>

<script>
import ContentWrapper from "@/components/content/ContentWrapper";
import SectionWrapper from "@/components/content/SectionWrapper";
import Temp from "@/components/Temp";
export default {
  components: {
    ContentWrapper,
    SectionWrapper,
    Temp,
  },
};
</script>

<style lang="sass" scoped>
.wrapper
  min-height: 200px
  display: grid
  place-items: center

  &-item
    width: fit-content
</style>

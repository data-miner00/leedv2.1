<template>
  <div class="quick-link-item">
    <div class="icon">
      <div>
        <font-awesome-icon :icon="['fab', icon]"></font-awesome-icon>
      </div>
    </div>
    <div class="item-details">
      <div>
        <span class="brand-name">{{ brand }}</span>
      </div>
      <div>
        <span class="brand-field">{{ type }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    brand: String,
    type: String,
    url: String,
  },
};
</script>

<style lang="sass" scoped>
.quick-link-item
  display: flex

  .icon
    font-size: 30px
    display: grid
    place-items: center
    width: 60px
    height: 60px

  .item-details
    margin-left: 10px
    display: flex
    flex-direction: column
    justify-content: center

    .brand-name
      font-size: 18px
      font-weight: 700

    .brand-field
      font-size: 13px
      color: #5b7083
      text-transform: uppercase

.active
  color: rgb(121, 75, 196)
</style>

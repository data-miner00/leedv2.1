<template lang="pug">
  AssignInfo(:courseCode="code" :courseName="name" :assignNo="assignNo" purpose="Group Details")
    .content-div
      

</template>

<script>
import AssignInfo from "@/components/layouts/AssignInfo";
export default {
  components: {
    AssignInfo,
  },
  data: () => ({
    code: "UECS1234",
    name: "Ancient Programming",
    assignNo: 1,
  }),
  computed: {
    groupId() {
      return this.$router.params.groupId;
    },
  },
  mounted() {
    //
  },
};
</script>

<style lang="sass" scoped>
.content-div
  width: 500px
  margin: 50px auto 0
  border-top: 1px solid #eee
</style>

<template lang="pug">
  AssignmentLayout(:courseCode="code" :courseName="name" :assignNo="assignNo")
    .containern
      UploadForm/
</template>

<script>
import AssignmentLayout from "@/components/layouts/AssignInfo";
import UploadForm from "@/components/UploadForm";

export default {
  components: {
    AssignmentLayout,
    UploadForm,
  },
  props: {
    //
  },
  data: () => ({
    code: "UECS1233",
    name: "Ancient Programming",
    assignNo: 5,
  }),
};
</script>

<style lang="sass" scoped>
.containern
  width: 50%
  margin: 0 auto
</style>

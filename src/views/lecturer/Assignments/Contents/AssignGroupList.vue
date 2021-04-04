<template lang="pug">
  .groupList 
    .section-divider
    .speakup #[span {{ subjectCode }}] {{ subjectTitle }} A{{ assignNo }}
    Loader(v-if="loading")
    GroupItem(
      v-else
      v-for="(group, index) in groups"
      :key="index"
      :index="index"
      :leaderName="group.leaderName"
      :maxMember="maxMember"
      :memberCount="group.membersCount"
      :groupId="group.id"
      :submitted="group.submitted"
      :assignmentId="assignmentId"
    )
</template>

<script>
import axios from "axios";

import GroupItem from "@/components/lecturer/GroupItem";
import Loader from "@/components/Loader";

export default {
  components: {
    GroupItem,
    Loader,
  },
  data: () => ({
    loading: true,

    subjectCode: "UECSXXXX",
    subjectTitle: "Sample Placeholder",
    assignNo: 1,
    maxMember: 4,
    groups: [],
  }),
  async mounted() {
    axios
      .get(`assignment/${this.assignmentId}`)
      .then((res) => {
        this.subjectCode = res.data.subjectCode;
        this.assignNo = res.data.assignNo;
        axios.get(`subject/${this.subjectCode}`).then((res) => {
          this.subjectTitle = res.data.name;
        });
      })
      .catch(console.error);

    try {
      const res = await axios.get(`assignment/${this.assignmentId}/groups`);
      this.groups = res.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    assignmentId() {
      return this.$route.params.assignmentId;
    },
  },
};
</script>

<style lang="sass" scoped>
.groupList
  position: relative
  .speakup
    padding: 14px
    border-bottom: 1px solid #eee
    text-align: center
    font-weight: 800
    span
      color: brown
</style>

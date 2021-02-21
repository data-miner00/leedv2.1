<template>
  <div class="management">
    <div class="go-back" @click="$router.go(-1)">
      <v-icon>mdi-more</v-icon>
    </div>
    <div class="section-title">Gantt Chart</div>
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Project Activities</th>
          <th>Planned Completion Date</th>
          <th>W1</th>
          <th>W2</th>
          <th>W3</th>
          <th>W4</th>
          <th>W5</th>
          <th>W6</th>
          <th>W7</th>
          <th>W8</th>
          <th>W9</th>
          <th>W10</th>
          <th>W11</th>
          <th>W12</th>
          <th>W13</th>
          <th>W14</th>
          <th>W15</th>
          <th>W16</th>
          <th>W17</th>
        </tr>
      </thead>
      <tbody>
        <GanttItem
          v-for="(item, index) in gantts"
          :key="index"
          :index="index"
          :description="item.description"
          :dateOfCompletion="item.dateOfCompletion"
          :from="item.from"
          :until="item.until"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import GanttItem from "@/components/GanttItem";
export default {
  components: {
    GanttItem,
  },
  data: () => ({
    gantts: [
      {
        description: "Build domething cool",
        dateOfCompletion: "12-3-2012",
        from: 1,
        until: 2,
      },
      {
        description: "Build domething cool",
        dateOfCompletion: "12-3-2012",
        from: 1,
        until: 2,
      },
      {
        description: "Build domething cool",
        dateOfCompletion: "12-3-2012",
        from: 2,
        until: 5,
      },
      {
        description: "Build domething cool",
        dateOfCompletion: "12-3-2012",
        from: 4,
        until: 8,
      },
    ],
  }),
  mounted() {
    //
  },
  computed: {
    groupId() {
      return this.$route.params.groupId;
    },
  },
};
</script>

<style lang="sass" scoped>
.management
</style>

<template>
  <tr class="gantt-item">
    <td>{{ index + 1 }}</td>
    <td>{{ description }}</td>
    <td>{{ dateOfCompletion }}</td>
    <td
      class="week-column"
      v-for="i in range(17)"
      :key="i"
      :style="
        checkOccupy(i + 1)
          ? { background: `${color}` }
          : { background: 'white' }
      "
    ></td>
    <td class="edit" @click="editGantt"><v-icon>mdi-pencil</v-icon></td>
    <td class="delte" @click="delteGantt"><v-icon>mdi-trash-can</v-icon></td>
  </tr>
</template>

<script>
import { range } from "@/utils";
export default {
  props: {
    index: Number,
    description: String,
    dateOfCompletion: String,
    from: Number,
    until: Number,
    color: String,
    id: String,
    assigneeId: String,
  },
  data: () => ({
    dialog: false,
  }),
  mounted() {
    //
  },
  methods: {
    checkOccupy(weekNumber) {
      return weekNumber >= this.from && weekNumber <= this.until;
    },
    range,
    editGantt() {
      this.$emit("edit", {
        index: this.index,
        activity: this.description,
        deadline: this.dateOfCompletion,
        from: this.from,
        to: this.until,
        id: this.id,
        assigneeId: this.assigneeId,
      });
    },
    delteGantt() {
      this.$emit("delete", this.id);
    },
  },
};
</script>

<style lang="sass" scoped>
.occupied
  background: black

.gantt-item
  height: 57px
  vertical-align: top

  td
    padding: 8px

  .edit, .delte
    transition: color 0.2s
    color: rgba(0, 0, 0, 0.54)
    cursor: pointer

    i
      color: inherit

    &:hover
      color: black
</style>

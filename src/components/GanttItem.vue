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
  </tr>
</template>

<script>
export default {
  props: {
    index: Number,
    description: String,
    dateOfCompletion: String,
    from: Number,
    until: Number,
    color: String,
  },
  mounted() {
    //
  },
  methods: {
    checkOccupy(weekNumber) {
      return weekNumber >= this.from && weekNumber <= this.until;
    },
    // Util method
    range: function(start, stop, step) {
      if (typeof stop == "undefined") {
        // one param defined
        stop = start;
        start = 0;
      }

      if (typeof step == "undefined") {
        step = 1;
      }

      if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
      }

      var result = [];
      for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
      }

      return result;
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
</style>

<template lang="pug">
  .graphs
    .taitle {{ subjectCode }} {{ subjectTitle }}
    .graphs-wrapper
      v-chart.chart(:option="option1")
    .graphs-wrapper
      v-chart.chart(:option="option2")
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  components: {
    VChart,
  },
  props: {
    subjectTitle: String,
    subjectCode: String,
    dataset1: Array,
    dataset2: Array,
    dataset3: Array,
  },
  // provide: {
  //   [THEME_KEY]: "dark",
  // },
  computed: {
    option1() {
      return {
        title: {
          text: "Members Count of Assignment Groups",
          subtext: "Distribution of Members Count of Group",
          left: "right",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Members Count",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: this.dataset1,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
    },
    option2() {
      return {
        title: {
          text: "Submission Rate of Assignment",
          subtext: "Breaking It Down",
          left: "right",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Members Count",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: this.dataset2,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
    },
  },
};
</script>

<style lang="sass" scoped>
.graphs
  .taitle
    text-align: center
    padding: 10px
    font-weight: 800
    font-size: 19px
    border-bottom: 1px solid #eee
  .graphs-wrapper
    padding-top: 30px
    border-bottom: 1px solid #eee
    .chart
      width: 500px
      height: 500px
      margin: 0 auto
</style>

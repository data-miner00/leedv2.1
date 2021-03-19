import ECharts from "vue-echarts";
import { use } from "echarts/core";

import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";
import { PieChart } from "echarts/charts";

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent, PieChart]);

export default ECharts;

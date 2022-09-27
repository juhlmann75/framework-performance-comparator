import Chart from 'chart.js/auto';
import { data } from './data';
import {AllMetrics} from "./model";

const ctx = document.getElementById("chart") as HTMLCanvasElement;

const allMetrics: AllMetrics = (data as unknown) as AllMetrics;
const datasets = []

for (const filename of Object.keys(allMetrics)) {
  console.log(filename);
  datasets.push({
    label: filename,
    // data: allMetrics[filename]['http_reqs']
    data: allMetrics[filename]['http_reqs']
  });
}

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    // datasets: [{
    //   label: "Dataset 1",
    //   data: [1, 2, 3],
    // }]
    datasets: datasets,
  },
  options: {
    parsing: {
      xAxisKey: 'timestamp',
      yAxisKey: 'metricValue'
    }
  },
});

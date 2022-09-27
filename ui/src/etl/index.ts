import {readdir, readFileSync, writeFile} from 'fs';
import {AllMetrics, Metric, Metrics} from "../model";

const input_path = '../k6/output'
const output_path = 'src/data/index.ts'

main();

function processCSV(path: string): Metrics {
  console.log(`processing ${path}`);
  const metrics: Metrics = {};

  const data = readFileSync(path, { encoding: 'utf-8' });
  const lines = data.split('\n');

  lines.forEach((line, index) => {
    line = line.trim();
    if (index == 0 || !line) {
      return;
    }

    const values = line.split(',');

    const metricValue = values[2] ? parseInt(values[2]) : 0;
    const errorCode = values[5] ? parseInt(values[5]) : 0;


    const metric: Metric = {
      metricName: values[0],
      timestamp: new Date(parseInt(values[1]) * 1_000),
      metricValue: metricValue,
      check: values[3],
      error: values[4],
      errorCode: errorCode,
      expectedResponse: values[6],
      group: values[8],
      method: values[9],
      name: values[10],
      proto: values[11],
      scenario: values[12],
      service: values[13],
      status: values[14],
      subproto: values[15],
      tlsVersion: values[16],
      url: values[17],
      extraTags: values[18],
    }

    if (metric.metricName in metrics) {
      metrics[metric.metricName].push(metric);
    } else {
      metrics[metric.metricName] = [metric];
    }
  });

  return metrics;
}


function main() {
  readdir(input_path, (err, files) => {
    if (err) {
      throw err;
    }

    const allMetrics: AllMetrics = {};

    files.forEach(file => {
      if (file.endsWith(".csv")) {
        allMetrics[file] = processCSV(`${input_path}/${file}`);
      } else if (file.endsWith(".json")) {
        console.log(`ignoring json files - ${file}`);
      }
    });

    const data = JSON.stringify(allMetrics, null, 2);
    const tsFileContents = `export const data =\n${data};`;

    writeFile(output_path, tsFileContents, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Output written to ${output_path}`);
      }
    });
  });
}

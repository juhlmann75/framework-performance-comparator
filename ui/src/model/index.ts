/**
 * metric_name,timestamp,metric_value,check,error,error_code,expected_response,group,method,name,proto,scenario,service,status,subproto,tls_version,url,extra_tags
 * http_reqs,1664654926,1.000000,,,1404,false,,GET,http://localhost:8080/test,HTTP/1.1,default,,404,,,http://localhost:8080/test,
 */
export interface Metric {
  metricName: string;
  timestamp: Date;
  metricValue: number;
  check: string;
  error: string;
  errorCode: number;
  expectedResponse: string;
  group: string;
  method: string;
  name: string;
  proto: string;
  scenario: string;
  service: string;
  status: string;
  subproto: string;
  tlsVersion: string;
  url: string;
  extraTags: string;
}

/**
 * mapping is filename -> metrics
 */
export interface AllMetrics {
  [key: string]: Metrics;
}

/**
 * mapping is metric name -> array of its metrics
 */
export interface Metrics {
  [key: string]: Metric[];
}

// export enum MetricName {
//   HTTP_REQS = "http_reqs",
//   HTTP_REQ_DURATION = "http_req_duration",
//   HTTP_REQ_BLOCKED = "http_req_blocked",
//   HTTP_REQ_CONNECTING = "http_req_connecting",
//   HTTP_REQ_TLS_HANDSHAKING = "http_req_tls_handshaking",
//   HTTP_REQ_SENDING = "http_req_sending",
//   HTTP_REQ_WAITING = "http_req_waiting",
//   HTTP_REQ_RECEIVING = "http_req_receiving",
//   HTTP_REQ_FAILED = "http_req_failed",
//   CHECKS = "checks",
//   VUS = "vus",
//   VUS_MAX = "vus_max",
//   DATA_SENT = "data_sent",
//   DATA_RECEIVED = "data_received",
//   ITERATION_DURATION = "iteration_duration",
//   ITERATIONS = "iterations",
// }
//
// export function getMetricNameFromString(name: string): MetricName {
//   for (const entry of Object.entries(MetricName)) {
//     const key = entry[0];
//     const value = entry[1];
//
//     if (value === name) {
//       return MetricName[key];
//     }
//   }
//
//   throw new Error(`--- ${name} --- metric name unrecognized, need to modify etl code to handle`);
// }

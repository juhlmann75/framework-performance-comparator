import { sleep, check } from 'k6';
import { Options } from 'k6/options';
import http from 'k6/http';

const vus = __ENV.VUS ? parseInt(__ENV.VUS) : 10;
const duration = __ENV.DURATION ? __ENV.DURATION : '1m';
const endpoint = __ENV.ENDPOINT ? __ENV.ENDPOINT : 'http://localhost:8080/test';

export let options:Options = {
    stages: [
        { duration: '30s', target: vus }, // simulate ramp-up of traffic from 1 to n users over 30 seconds
        { duration: duration, target: vus} // stay at n users for DURATION
    ]
};

export default () => {
    const res = http.get(endpoint);
    check(res, {
        'status is 200': () => res.status === 200,
    });
    sleep(1);
};

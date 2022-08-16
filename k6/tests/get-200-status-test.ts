import { sleep, check } from 'k6';
import { Options } from 'k6/options';
import http from 'k6/http';

export let options:Options = {
    vus: 10,
    duration: '10s'
};

export default () => {
    const res = http.get('http://localhost:8080/test');
    check(res, {
        'status is 200': () => res.status === 200,
    });
    sleep(1);
};

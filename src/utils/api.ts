import axios from 'axios';

axios.defaults.timeout = 10000;
axios.defaults.headers.common.Accept = '*/*';

export default axios.create({
  baseURL: 'https://api-merging-point.transign.co/api',
});

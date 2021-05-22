import axios from 'axios';

axios.defaults.timeout = 10000;
axios.defaults.headers.common.Accept = '*/*';

export default axios.create({
  baseURL: 'https://merging-point.transign.co/api',
});

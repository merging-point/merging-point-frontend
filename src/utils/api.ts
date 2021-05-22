import axios from 'axios';

axios.defaults.timeout = 10000;
axios.defaults.headers.common.Accept = '*/*';

export default axios.create({ baseURL: 'https://e030e1b57e01.ngrok.io/api' });

import axios from 'axios';

export default axios.create({
  baseURL: 'http://eacodingtest.digital.energyaustralia.com.au/api/v1'
//   baseURL: 'https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals'
});

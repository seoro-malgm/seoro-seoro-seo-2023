const axios = require("axios");

const baseURL = "https://api.notion.com/v1";
const config = {
  baseURL: baseURL,
  timeout: 60 * 1000, // Timeout
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    "Notion-Version": "2021-05-11",
  },
};

const _axios = axios.create(config);
window.axios = _axios;
export default _axios;

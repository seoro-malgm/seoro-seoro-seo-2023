import axios from "plugins/axios.js";
const databaseId = "bc91c432af3045f7a251450c67e7c806";

export const Database = {
  async getDB() {
    const data = await axios.post(`/databases/${databaseId}/query`);
    return data;
  },
};

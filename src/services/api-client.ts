import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dcc924db2c0a4457a180efab6c2a180c",
  },
});

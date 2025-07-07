import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "91f2ffe9bd484e7d8501b55eb59f3a84",
  },
});

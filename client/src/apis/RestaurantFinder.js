import axios from "axios";

//axios is easier than fetch in some ways
export default axios.create({ //creates an axios instance
  baseURL: "http://localhost:3001/api/v1/restaurants",
})
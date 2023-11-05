import axios from "axios";

//axios is easier than fetch in some ways
export default axios.create({ //creates an axios instance
  baseURL: "http://localhost:3001/api/v1/restaurants",
})

//It is more advantageous to use Axios with axios.create because it creates a new instance of Axios with a custom config.
// With axios.create, we can set up a config like baseUrl, 
// and all the calls made will simply require the URI for the HTTP calls, 
// without the full URL.
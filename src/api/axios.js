// import axios from "axios";

// // Create an axios instance
// const instance = axios.create({
//   baseURL: "http://localhost:5000/api", // backend URL
// });

// export default instance;


//Use for online deployment 

import axios from "axios";

// Create an axios instance
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  // use VITE_API_URL if defined (on Vercel), fallback to localhost for local dev
});

export default instance;

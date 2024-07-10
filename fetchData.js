const axios = require("axios");

const url =
  "http://ec2-13-234-117-185.ap-south-1.compute.amazonaws.com/perf/v1/campaign";

async function fetchData(token) {
  try {
    const response = await axios.get(url, {
      params: {
        isOptimize: 1,
      },
      headers: {
        token: token,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
}

module.exports = { fetchData };

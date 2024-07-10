const { fetchData } = require("./fetchData");
const axios = require("axios");

async function processData() {
  const token =
    "BCpdPT7N7K/98VvSvqcC9N3+ODg8FAQ1aq6EnkZ5hTyYyWw7HDDuVq8/oHfCU43V";
  try {
    const data = await fetchData(token);

    // Iterate over the response data
    for (const item of data) {
      // Process each item in the response
      console.log(item);
      // Add your processing logic here
    }
  } catch (error) {
    console.error("Error processing data:", error.message);
  }
}

async function getToken() {
  try {
    const response = await axios.get("API-endpoint.com");
    return response.data.token;
  } catch (error) {
    console.error("Error fetching token:", error.message);
    throw error;
  }
}

async function main() {
  try {
    // const token = await getToken();
    await processData();
  } catch (error) {
    console.error("Main error:", error.message);
  }
}

main();

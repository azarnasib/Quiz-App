import axios from "axios";

const API_URL = "https://opentdb.com/api.php?amount=10";
const API_KEY = "Y2LBgyn0oXYJPjOyokjkpRfulEZufYFnMmh7DyWU";

export const fetchQuizData = async () => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        apiKey: "Y2LBgyn0oXYJPjOyokjkpRfulEZufYFnMmh7DyWU"
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Quiz:", error);
    throw error;
  }
};
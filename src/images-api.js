import axios from "axios";

const BASE_URL = "https://api.unsplash.com";
const ACCESS_KEY = "GgvK89EzqrRrVzzR8Dqz3Ub9BwN1pu1hm0BA7vqvdJc";

export const searchImages = async (query, page = 1, perPage = 21) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
      params: {
        query,
        client_id: ACCESS_KEY,
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

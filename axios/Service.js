import axios from "axios";

// API Key
const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWQ4NTI4ZTBlZmEyOTk3NDFiOTY5ZjQ2M2ZhYjY1OSIsInN1YiI6IjYwZjUxNmM4NjZhMGQzMDA1ZTU2MTAyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JcAO5JZ6ciiOHcGcR0ibCILgNQ8KbprLpn1k8AnLTNA";

// Enum for HTTP methods
export const HttpMethod = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};

export default class NetworkService {
  constructor(baseURL = "https://api.themoviedb.org/3") {
    // Base URL
    this.baseURL = baseURL;

    // Axios instance
    this.instance = axios.create({
      baseURL,
      timeout: 5000,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });
  }

  fetchData = async (
    endpoint,
    method = HttpMethod.GET,
    data = null,
    onFinished = null
  ) => {
    try {
      const response = await this.instance.request({
        url: endpoint,
        method,
        data,
      });

      console.log("Data received:", response.data);

      // Invoke onFinished callback with the response data
      if (onFinished && typeof onFinished === "function") {
        onFinished(null, response.data);
      }

      return response.data;
    } catch (error) {
      // Handle errors (customize based on your needs)
      console.error("Error fetching data:", error);

      // Invoke onFinished callback with the error
      if (onFinished && typeof onFinished === "function") {
        onFinished(error, null);
      }

      throw error;
    }
  };
}

import NetworkService, { HttpMethod } from "./Service.js";

const networkInstance = new NetworkService();

class Endpoints {
  // Function to retrieve posts
  static getMovies = async (onFinished) => {
    const endpoint = "/movie/popular?language=en-US&page=1";
    return networkInstance.fetchData(
      endpoint,
      HttpMethod.GET,
      null,
      onFinished
    );
  };

  // Function to create a post
  static searchMovie = async (query, onFinished) => {
    const endpoint = "/search/movie?include_adult=false&language=en-US&page=1&query=" + query;
    return networkInstance.fetchData(
      endpoint,
      HttpMethod.GET,
      null,
      onFinished
    );
  };
}

export default Endpoints;

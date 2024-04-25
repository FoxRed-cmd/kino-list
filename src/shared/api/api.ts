import axios from "axios";

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w400/";
export const BASE_URL = "https://api.themoviedb.org/3/movie";

export const $api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "f73579e910e9e39ac11ee7d64441b59c",
  },
});

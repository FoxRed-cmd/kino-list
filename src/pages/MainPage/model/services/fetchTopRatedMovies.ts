import { $api } from "src/shared/api/api";

export async function fetchTopRatedMovies(
  language: string = "ru-RU",
  page: number = 1
) {
  const { data } = await $api.get("top_rated", {
    params: {
      language,
      page,
    },
  });

  return data;
}

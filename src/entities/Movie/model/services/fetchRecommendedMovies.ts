import { $api } from "src/shared/api/api";

export async function fetchRecommendedMovies(
  id: number,
  language: string = "ru-RU"
) {
  const { data } = await $api.get(`${id}/recommendations`, {
    params: {
      language,
    },
  });

  return data;
}

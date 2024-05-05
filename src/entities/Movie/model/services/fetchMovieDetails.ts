import { $api } from "src/shared/api/api";

export async function fetchMovieDetails(
  id: number,
  language: string = "ru-RU"
) {
  const { data } = await $api.get(id.toString(), {
    params: {
      language,
    },
  });
  return data;
}

type Genre = {
  id: number;
  name: string;
};

export interface MovieLitsType {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  overview: string;
  popularity: number;
  release_date: string;
  runtime: number;
  genres: Genre[];
}

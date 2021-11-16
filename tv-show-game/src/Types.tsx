export interface TvShowData {
  page: number;
  results: TvShowList[];
  total_results: number;
  total_pages: number;
}

export interface TvShowList {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

export const enum GameStatus {
  ON_GAME = 0,
  GAME_OVER = 1,
}

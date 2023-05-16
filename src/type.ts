export interface Movie {
  id: number;
  title: string;
  date: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  genre_ids?: number[];
}

export interface MovieList {
  currentPage: number;
  totalPages: number;
  movies: Movie[];
}

export interface Genre {
  id: number;
  name: string;
}

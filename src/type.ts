export interface Movie {
  id: number;
  title: string;
  overview: string;
  date: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  genre_ids?: number[];
}

export interface Actors {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

export interface MovieList {
  currentPage: number;
  totalPages: number;
  loading: boolean;
  movies: Movie[];
}

export interface Genre {
  id: number;
  name: string;
}

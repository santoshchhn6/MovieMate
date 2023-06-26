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

export interface Review {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
  };
  content: string;
  created_at: string;
  id: number;
}

export interface MovieDetail {
  id: number;
  title: string;
  genres: {
    id: number;
    name: string;
  }[];
  vote_average: number;
  release_date: string;
  budget: number;
  revenue: number;
  runtime: number;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  adult: boolean;
  tagline: string;
}

export interface Videos {
  name: string;
  key: string;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

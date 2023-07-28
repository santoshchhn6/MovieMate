export interface MovieProps {
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

export interface MovieListProps {
  currentPage: number;
  totalPages: number;
  loading: boolean;
  movies: MovieProps[];
}

export interface GenreProps {
  id: number;
  name: string;
}

export interface ReviewProps {
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

export interface MovieInfoProps {
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

export interface VideoProps {
  name: string;
  key: string;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface CastProps {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

export interface CrewProps {
  id: number;
  name: string;
  profile_path: string | null;
  job: string;
}
export interface CreditsProps {
  cast: CastProps[];
  crew: CrewProps[];
}

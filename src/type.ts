export interface MovieProps {
  id: number;
  title: string;
  overview: string;
  date: string;
  adult: boolean;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
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

export type MovieCategoryProps =
  | "popular"
  | "upcoming"
  | "top_rated"
  | "now_playing";

export interface PersonType {
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: number;
}

type PersonInfoType = {
  "Known for": string;
  Popularity: number;
  Birthday: string;
  "Place of birth": string;
  Deathday: string | null;
  Gender: string;
};

export interface OptionType {
  value: string;
  title: string;
}

export interface LanguageType {
  iso_639_1: string;
  english_name: string;
  name: string;
}

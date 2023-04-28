import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface MovieDetail {
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
}

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    fetch(``)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default MovieDetail;

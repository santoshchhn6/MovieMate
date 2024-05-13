import Hero from "../components/Hero";
import MovieCategories from "../components/MovieCategories";
import { margin } from "../style/style";

const Home = () => {
  return (
    <>
      <Hero />
      <div className={margin}>
        {/* <MovieFilter /> */}
        <MovieCategories />
      </div>
    </>
  );
};

export default Home;

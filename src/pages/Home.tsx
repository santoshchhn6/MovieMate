import Banner from "../components/Banner";
import MovieCategories from "../components/MovieCategories";
import MovieFilter from "../components/MovieFilter";
import { margin } from "../style/style";

const Home = () => {
  return (
    <>
      <Banner />
      <div className={margin}>
        {/* <MovieFilter /> */}
        <MovieCategories />
      </div>
    </>
  );
};

export default Home;

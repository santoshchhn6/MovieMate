import Banner from "../components/Banner";
import Filter from "../components/Filter";
import MovieCategories from "../components/MovieCategories";
import { leftMargin, margin } from "../style/style";

const Home = () => {
  return (
    <>
      <Banner />
      <div className={margin}>
        <Filter />
        <MovieCategories />
      </div>
    </>
  );
};

export default Home;

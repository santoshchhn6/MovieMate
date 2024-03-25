import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/Search";
import Footer from "./components/Footer";
import Movie from "./pages/Movie";
import Person from "./pages/Person";

function App() {
  return (
    <Router>
      <div className=" bg-gray-950 text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/person/:id" element={<Person />} />
          <Route path="*" element={<h1>Not Page Found</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

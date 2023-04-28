import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import SearchMovie from "./components/SearchMovie";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-gray-950 text-white flex justify-center">
        <div className=" border-blue-500 w-[1440px] px-[20px]">
          <SearchMovie />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import ContentRowTop from "./ContentRowTop";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
import ContentRowMovies from "./ContentRowMovies";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={(<ContentRowTop />)} />
      <Route path="/genres" element={(<GenresInDb />)} />
      <Route path="/last" element={(<LastMovieInDb />)} />
      <Route path="/status" element={(<ContentRowMovies />)} />
      <Route path="*" element={(<h1>Not found</h1>)} />
    </Routes>
  );
}

export default AppRoutes;

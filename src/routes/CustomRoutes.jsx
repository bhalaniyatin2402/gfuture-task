import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* <Route path="/:mediaType/:id" element={<MovieDetails />} /> */}
    </Routes>
  );
}

export default CustomRoutes;

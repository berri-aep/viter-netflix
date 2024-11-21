import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/frontend/Home";
import Movies from "./components/pages/backend/movies/Movies";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/admin/movies" element={<Movies/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;

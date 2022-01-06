import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Home } from "../../views/Home/Home";
import { Fallback404 } from "../../views/Fallback404/Fallback404";
import { About } from "../../views/About/About";

export const Navigator = () => (
  <Router>
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/404"} element={<Fallback404 />} />
    </Routes>
  </Router>
);

import * as React from "react";

// React Router
import { Routes, Route } from "react-router-dom";

// Routes
import Home from "./routes/Home";
import Discussions from "./routes/Dicussions";
import Pages from "./routes/Pages";
import Assignments from "./routes/Assignments";
import Files from "./routes/Files";

// Components
import MuguaMain from "./components/MuguaMain";

// CSS
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MuguaMain />}>
        <Route index element={<Home />} />
        <Route path="discussions" element={<Discussions />} />
        <Route path="pages" element={<Pages />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="files" element={<Files />} />
      </Route>
    </Routes>
  );
}

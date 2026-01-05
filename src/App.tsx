import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { type FC } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Weddings } from "./components/Weddings";

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/casamentos" element={<Weddings />} />
      </Routes>
    </Router>
  );
};

export default App;

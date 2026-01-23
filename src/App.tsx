import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { type FC } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Weddings } from "./components/Weddings";
import { PatriciaJoaoWeddingDetails } from "./components/weddings/PatriciaJoaoWeddingDetails";

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/casamentos" element={<Weddings />} />
        <Route
          path="/casamentos/130724-patricia-joao"
          element={<PatriciaJoaoWeddingDetails />}
        />
      </Routes>
    </Router>
  );
};

export default App;

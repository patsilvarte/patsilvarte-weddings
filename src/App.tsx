import { type FC } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.css";

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    </Router>
  );
};

export default App;

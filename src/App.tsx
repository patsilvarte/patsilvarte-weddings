import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { type FC } from "react";
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Weddings } from "./components/Weddings";
import { PatriciaJoaoWeddingDetails } from "./components/weddings/PatriciaJoaoWeddingDetails";
import { ServiceDetails } from "./components/weddings/ServiceDetails";
import { WeddingServices } from "./info/types";

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
        <Route path="/casamentos/130925-gloria-micael" element={<Weddings />} />
        <Route path="/casamentos/041025-sofia-julien" element={<Weddings />} />

        <Route path="/servicos" element={<Homepage />} />
        <Route
          path="/servicos/convites"
          element={<ServiceDetails service={WeddingServices.CONVITES} />}
        />
        <Route
          path="/servicos/seating-chart"
          element={<ServiceDetails service={WeddingServices.SEATING_CHART} />}
        />
        <Route
          path="/servicos/paineis-boas-vindas"
          element={
            <ServiceDetails service={WeddingServices.PAINEIS_BOAS_VINDAS} />
          }
        />
        <Route
          path="/servicos/menus"
          element={<ServiceDetails service={WeddingServices.MENUS} />}
        />
        <Route
          path="/servicos/numeros-mesa"
          element={<ServiceDetails service={WeddingServices.NUMEROS_MESA} />}
        />
        <Route
          path="/servicos/aluguer"
          element={<ServiceDetails service={WeddingServices.ALUGUER} />}
        />
        <Route
          path="/servicos/lembrancas"
          element={<ServiceDetails service={WeddingServices.LEMBRANÇAS} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;

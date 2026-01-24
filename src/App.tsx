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
import { Services } from "./components/Services";
import { Weddings } from "./components/Weddings";
import { PatriciaJoaoWeddingDetails } from "./components/details/PatriciaJoaoWeddingDetails";
import { ServiceDetails } from "./components/details/ServiceDetails";
import { PageLayout } from "./components/general/PageLayout";
import { WeddingServices } from "./info/types";

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/casamentos"
          element={
            <PageLayout>
              <Weddings />
            </PageLayout>
          }
        />
        <Route
          path="/casamentos/130724-patricia-joao"
          element={
            <PageLayout>
              <PatriciaJoaoWeddingDetails />
            </PageLayout>
          }
        />
        <Route
          path="/casamentos/130925-gloria-micael"
          element={
            <PageLayout>
              <Weddings />
            </PageLayout>
          }
        />
        <Route
          path="/casamentos/041025-sofia-julien"
          element={
            <PageLayout>
              <Weddings />
            </PageLayout>
          }
        />

        <Route
          path="/servicos"
          element={
            <PageLayout>
              <Services />
            </PageLayout>
          }
        />
        <Route
          path="/servicos/convites"
          element={
            <PageLayout>
              <ServiceDetails service={WeddingServices.CONVITES} />
            </PageLayout>
          }
        />
        <Route
          path="/servicos/seating-chart"
          element={
            <PageLayout>
              <ServiceDetails service={WeddingServices.SEATING_CHART} />
            </PageLayout>
          }
        />
        <Route
          path="/servicos/paineis-boas-vindas"
          element={
            <PageLayout>
              <ServiceDetails service={WeddingServices.PAINEIS_BOAS_VINDAS} />
            </PageLayout>
          }
        />
        <Route
          path="/servicos/menus"
          element={
            <PageLayout>
              <ServiceDetails service={WeddingServices.MENUS} />
            </PageLayout>
          }
        />
        <Route
          path="/servicos/numeros-mesa"
          element={
            <PageLayout>
              <ServiceDetails service={WeddingServices.NUMEROS_MESA} />
            </PageLayout>
          }
        />
        <Route
          path="/servicos/aluguer"
          element={
            <PageLayout>
              <ServiceDetails service={WeddingServices.ALUGUER} />
            </PageLayout>
          }
        />
        <Route
          path="/servicos/lembrancas"
          element={
            <PageLayout>
              <ServiceDetails service={WeddingServices.LEMBRANÇAS} />
            </PageLayout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;

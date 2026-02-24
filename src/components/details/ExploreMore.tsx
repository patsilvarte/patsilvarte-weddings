import { useNavigate } from "react-router-dom";
import { Button } from "../general/Button";
import { Title } from "../general/Title";
import "./ExploreMore.scss";

export const ExploreMore = () => {
  const navigate = useNavigate();

  return (
    <div className="explore-more">
      <Title isSecondary title="Não fiques por aqui..." />
      <div className="explore-more__buttons">
        <Button onClick={() => navigate("/casamentos")}>
          Explorar outros casamentos
        </Button>
        <Button onClick={() => navigate("/servicos")}>
          Explorar por serviço
        </Button>
      </div>
    </div>
  );
};

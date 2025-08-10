import { useNavigate } from "react-router-dom";
import { CreatPasswordDefaut } from "../Hook/createPassordDefaut";

function Accueil() {
  const navigate = useNavigate();
  const defautPassword = () => {
    const password = CreatPasswordDefaut();
    navigate("/affichage", {
      state: { password: password },
    });
  };

  const persoChoice = () => {
    navigate("/persochoice");
  };

  return (
    <div className="contenaire-global">
      <h2>Bienvenue</h2>
      <div className="tooltip-container">
        <button onClick={() => defautPassword()}>
          Créer un mot de passe par défaut
        </button>
        <span className="tooltip">
          <div>8 caractères, au minimum: 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial </div>

        </span>
      </div>

      <button onClick={() => persoChoice()}>
        Créer un mot de passe personnalisé
      </button>
    </div>
  );
}
export default Accueil;

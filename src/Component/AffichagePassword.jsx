import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import { evaluerForce } from "../Hook/evaluerForce";

function AffichagePassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [copied, setCopied] = useState(false);
  const password = location.state?.password;
  const forcePassword = evaluerForce(password);

  const copierDansPressePapier = async () => {
    try {
      if (!navigator.clipboard) {
        // Fallback pour les navigateurs plus anciens
        const textArea = document.createElement("textarea");
        textArea.value = password;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      } else {
        await navigator.clipboard.writeText(password);
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Erreur lors de la copie:", error);
      alert(
        "Impossible de copier automatiquement. Sélectionnez et copiez manuellement."
      );
    }
  };

  const retourAccueil = () => {
    navigate("/");
  };

  const retourParametre = () => {
    navigate("/persochoice");
  };
  return (
    <div className="contenaire-global">
      <h3 className="title">Le mot de passe généré:</h3>
      <h2 className="password-display">{password} </h2>
      <div
        className={`force-indicator force-${forcePassword.niveau.toLowerCase()}`}
      >
        Force: {forcePassword.niveau}
      </div>
      <div>
        <button onClick={copierDansPressePapier}>
          {" "}
          {copied ? " ✅Copié !" : "📋 Copier"}
        </button>
        <button onClick={retourParametre}>Changer les paramètres</button>
      </div>

      <button onClick={retourAccueil}>Retour à l'accueil</button>
    </div>
  );
}
export default AffichagePassword;

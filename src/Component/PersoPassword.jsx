import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreatPasswordPerso } from "../Hook/CreatPasswordPerso";

function PersoPassword() {
  const [nbTotal, setNbTotal] = useState(0);
  const [nbMaj, setNbMaj] = useState(0);
  const [nbCharSpe, setNbCharSpe] = useState(0);
  const [nbNum, setNbNum] = useState(0);
  const [nbMin, setNbMin] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
 const total = parseInt(nbTotal);
  const sommeMinimums = parseInt(nbMaj) + parseInt(nbMin) + parseInt(nbNum) + parseInt(nbCharSpe);
  
  if (total < sommeMinimums) {
    alert(`Le nombre total (${total}) doit être supérieur ou égal à la somme des minimums (${sommeMinimums})`);
    return;
  }
  
  if (total < 4) {
    alert("Le mot de passe doit contenir au moins 4 caractères");
    return;
  }
  
  const password = CreatPasswordPerso(total, nbCharSpe, nbMaj, nbNum, nbMin);
  navigate("/affichage", { state: { password: password } });
  };
  const retourAccueil = () => {
    navigate('/');
  };
  return (
    <div className="contenaire-global">
      <h2 className="title">Donner la valeur minimum pour chaque item</h2>
      <form onSubmit={handleSubmit} className="formulaire">
        <div className="champs">
          <label htmlFor="nbTotal">
            <p>Nombre total de caractères</p>
          </label>
          <input
            className="valeur"
            type="number"
            value={nbTotal}
            id="nbTotal"
            onChange={(e) => setNbTotal(e.target.value)}
            
          />
        </div>
        <div className="champs">
          <label htmlFor="charSpe">
            <p>Nombre de caractères spéciaux</p>
          </label>
          <input
            className="valeur"
            type="number"
            value={nbCharSpe}
            id="charSpe"
            onChange={(e) => setNbCharSpe(e.target.value)}
            
          />
        </div>
        <div className="champs">
          <label htmlFor="nbMAj">
            <p>Nombre de majuscule</p>
          </label>
          <input
            className="valeur"
            type="number"
            value={nbMaj}
            id="nbMaj"
            onChange={(e) => setNbMaj(e.target.value)}
            
          />
        </div>
        <div className="champs">
          <label htmlFor="nbMin">
            <p>Nombre de minuscule</p>
          </label>
          <input
            className="valeur"
            type="number"
            value={nbMin}
            id="nbMin"
            onChange={(e) => setNbMin(e.target.value)}
           
          />
        </div>
        <div className="champs">
          <label htmlFor="nbNum">
            <p>Nombre de chiffres</p>
          </label>
          <input
            className="valeur"
            type="number"
            value={nbNum}
            id="nbNum"
            onChange={(e) => setNbNum(e.target.value)}
           
          />
        </div>

        <button className="valider" type="submit">
          Valider
        </button>
      </form>
      <button className="valider" onClick={retourAccueil} >Retour</button>
    </div>
  );
}
export default PersoPassword;

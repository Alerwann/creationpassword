import {  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
  import Accueil from './Component/Accueil';
import './App.css';
import AffichagePassword from "./Component/AffichagePassword";
import PersoPassword from "./Component/PersoPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />}/>
        <Route path="/affichage/" element={<AffichagePassword />}/>
        <Route path="/persochoice" element={<PersoPassword />}/>
          
      
      </Routes>

    </Router>
  );
}

export default App;

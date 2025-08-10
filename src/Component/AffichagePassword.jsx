import { useLocation,useNavigate } from 'react-router-dom';
import { useState } from 'react';


function AffichagePassword(){
    const navigate = useNavigate()
    const location = useLocation();
      const [copied, setCopied] = useState(false);
  const password = location.state?.password;

  const copierDansPressePapier = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      
      // Remettre le texte original après 2 secondes
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Erreur lors de la copie:', error);
    }
  };
  const retourAccueil = () => {
    navigate('/');
  };

  const retourParametre=()=>{
    navigate('/persochoice')
  }
    return(
        <div className='contenaire-global'>
            <h3 className='title'>Le mot de passe généré:</h3>
            <h2 className='password-display'>{password} </h2>
            
                <button onClick={copierDansPressePapier}>  {copied ? ' ✅Copié !' : '📋 Copier'}</button>
                <button onClick={retourParametre}>Changer les paramètres</button>
            
                <button onClick={retourAccueil}>Retour à l'accueil</button>
            
        </div>
    )
} export default AffichagePassword
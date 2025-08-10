export function evaluerForce(password) {
  if (!password) return { niveau: "Aucun", couleur: "gray" };
  
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  
  if (score < 3) return { niveau: "Faible", couleur: "red" };
  if (score < 5) return { niveau: "Moyen", couleur: "orange" };
  return { niveau: "Fort", couleur: "green" };
}
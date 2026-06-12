const displayElement = document.getElementById('zone-texte');
const inputElement = document.getElementById('input');
const timerElement = document.getElementById('timer');
const resultatsElement = document.getElementById('resultats');

const banquePhrases = [
  "Le développement d'une application robuste demande une planification minutieuse et une gestion rigoureuse des erreurs de syntaxe.",
  "La cybersécurité est devenue un enjeu majeur pour toutes les entreprises qui souhaitent protéger efficacement leurs données contre les attaques.",
  "Configurer correctement un serveur nécessite parfois de passer de longues heures à lire la documentation officielle pour trouver la solution.",
  "Les langages typés comme TypeScript permettent de détecter les bugs directement pendant la phase d'écriture, avant même l'exécution du programme.",
  "Le vieux paladin brandit son épée étincelante face aux ombres qui envahissaient la vallée, prêt à défendre les frontières du royaume.",
  "Les alchimistes passent leurs nuits à mélanger des herbes rares et des cristaux instables pour tenter de créer des potions magiques.",
  "Caché dans la pénombre de la taverne, l'espion observait attentivement les gardes du château pour préparer sa prochaine infiltration nocturne.",
  "Une étrange lueur bleue s'échappait des ruines antiques, gravées de runes mystérieuses que plus aucun être vivant ne savait déchiffrer aujourd'hui.",
  "La vitesse de frappe au clavier n'est rien sans une précision absolue, car corriger une erreur fait perdre beaucoup de temps.",
  "Chaque ligne de texte que tu écris aujourd'hui te rapproche un peu plus de la maîtrise complète de ce test de dactylographie.",
  "Pour réussir un défi ambitieux, il faut savoir accepter les échecs temporaires et persévérer avec une régularité exemplaire jour après jour."
];

let tempsEcoule = 0;
let intervalChrono = null;
let longueurMinimale = 0;
let chronoDemare = false;

function genererNouvellePhrase() {
  const indexAuHasard = Math.floor(Math.random() * banquePhrases.length);
  const phraseChoisie = banquePhrases[indexAuHasard];

  displayElement.innerHTML = '';
  inputElement.value = '';
  longueurMinimale = 0;
  chronoDemare = false;

  timerElement.innerText = "0";
  if (intervalChrono) clearInterval(intervalChrono);
  intervalChrono = null;
  tempsEcoule = 0;

  resultatsElement.style.display = 'none';
  inputElement.disabled = false;
  inputElement.focus();

  phraseChoisie.split('').forEach((lettre, index) => {
    const spanLettre = document.createElement('span');
    spanLettre.innerText = lettre;
    if (index === 0) spanLettre.className = 'cursor';
    displayElement.appendChild(spanLettre);
  });
}

inputElement.addEventListener('keydown', (e) => {
  if ((e.key === 'Backspace' || e.key === 'Delete') && inputElement.value.length <= longueurMinimale) {
    e.preventDefault();
  }
});

inputElement.addEventListener('input', () => {
  const listeSpans = displayElement.querySelectorAll('span');
  const lettresTapees = inputElement.value.split('');

  // Démarrer le chrono au premier caractère
  if (lettresTapees.length === 1 && !chronoDemare) {
    demarrerChrono();
    chronoDemare = true;
  }

  if (inputElement.value.length > longueurMinimale) {
    longueurMinimale = inputElement.value.length;
  }

  listeSpans.forEach((spanLettre, index) => {
    const lettreJoueur = lettresTapees[index];

    if (lettreJoueur == null && index === lettresTapees.length) {
      spanLettre.className = 'cursor';
    } else if (lettreJoueur == null) {
      spanLettre.className = '';
    } else if (lettreJoueur === spanLettre.innerText) {
      spanLettre.className = 'correct';
    } else {
      spanLettre.className = 'incorrect';
    }
  });

  // Fin de la phrase
  if (lettresTapees.length >= listeSpans.length) {
    arreterChrono();
    inputElement.disabled = true;
    afficherResultats(listeSpans, lettresTapees);
  }
});

function demarrerChrono() {
  tempsEcoule = 0;
  timerElement.innerText = "0";
  if (intervalChrono) clearInterval(intervalChrono);
  intervalChrono = setInterval(() => {
    tempsEcoule++;
    timerElement.innerText = tempsEcoule.toString();
  }, 1000);
}

function arreterChrono() {
  if (intervalChrono) {
    clearInterval(intervalChrono);
    intervalChrono = null;
  }
}

function afficherResultats(listeSpans, lettresTapees) {
  let correct = 0;
  listeSpans.forEach((span, i) => {
    if (lettresTapees[i] === span.innerText) correct++;
  });

  const totalTapes = listeSpans.length;
  const minutes = tempsEcoule / 60;
  const wpm = minutes > 0 ? Math.round((correct / 5) / minutes) : 0;
  const precision = Math.round((correct / totalTapes) * 100);

  document.getElementById('res-temps').innerText = tempsEcoule;
  document.getElementById('res-wpm').innerText = wpm;
  document.getElementById('res-precision').innerText = precision;
  resultatsElement.style.display = 'block';
}

genererNouvellePhrase();
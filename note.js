randomString = [
  "Se non hai intenzione di aiutare, vattene",
  "Ho solo bisogno di tempo e amore",
  "Vorrei poter fare le cose meglio",
  "Non è facile come aprire la bocca",
  "Ci sono cose che non posso fare",
  "Pensa a quello che farai",
  "Non voglio che tu mi lasci",
  "Allora fallo e basta, non fa più male",
  "Lasciami in pace, vai via (シ >.<)シ",
  "Non fare questo a te stesso, non fare questo a me",
];
randomChance = Math.floor(Math.random() * 10);
for (i = 0; i <= randomChance; i++) {
  if (i == randomChance) {
    break;
  }
}
alert(randomString[i]);
window.onbeforeunload = function () {
  console.error("No\nFUCKING\nRELOAD !");
  return "";
};

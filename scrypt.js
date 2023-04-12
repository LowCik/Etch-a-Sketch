//Initialize component

const grillContainer = document.querySelector('.grill-container');

/* créer un grille de 16 par 16.
D'abord créer les 16 div "ligne"
puis dans ces ligne, les 16 div "Case".
  */
function createGrill() {
  let size = 16;
  console.log("yes");
  console.log("haouais");
  for (let i = 0; i < size; i++) {
    const line = document.createElement('div');//créer "l'objet" div
    line.classList.add('line-start');
    line.style.backgroundColor = 'red';
    grillContainer.append(line);

  }
  
  console.log('bah oausi');
}
createGrill();

//Initialize component

const grillContainer = document.querySelector('.grill-container');

/* créer un grille de 16 par 16.
D'abord créer les 16 div "ligne"
puis dans ces ligne, les 16 div "Case".
  */
function createGrill() {
  let size = 16;

  for (let i = 0; i < size; i++) {
    const line = document.createElement('div');//créer "l'objet" div
    line.classList.add('line');
    
    for (let i = 0; i < size; i++) {
      const cell = document.createElement('div');// créer une div
      cell.classList.add('cell');
      cell.textContent = i;
      cell.style.backgroundColor = 'violet';
      line.append(cell);
    }

    grillContainer.append(line); // l'ajoute a grill Container
  }

}
createGrill();

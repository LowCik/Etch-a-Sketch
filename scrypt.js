//Initialize component

const grillContainer = document.querySelector('.grill-container');
const sizeButton = document.querySelector('button.size');

let size = askSize();
let behavior = "greyScale";

sizeButton.addEventListener('click', () => {
  clearGrill();
  createGrill(askSize());
});
/* créer un grille de 16 par 16.
D'abord créer les 16 div "ligne"
puis dans ces ligne, les 16 div "Case".
  */
function initLine() {
  const line = document.createElement('div');//créer "l'objet" div
  line.classList.add('line');
  line.classList.add('flex');
  return line;

}

function initCell() {
  const cell = document.createElement('div');// créer une div
  cell.classList.add('cell');
  cell.classList.add('flex');
  cell.classList.add('with-border')
  cell.addEventListener('mouseover', () => {
    cellBehavior(cell);
  });
  return cell;
}

function cellBehavior(cell) {
  switch (behavior) {
    case 'rainbow':
      return cell.style.backgroundColor = `rgb(
      ${Math.random() * 255}, 
      ${Math.random() * 255},
      ${Math.random() * 255})`;
      break;
    case 'greyScale':
      return cell.style.backgroundColor = `rgba(
      255,255,255,120)`;
      break;
    case 'colored':
      break;
  }
}
function askSize() {
  let size = prompt(`Enter a number.`)
  while (Math.round(size) <= 0)
    size = prompt(`Enter a strictly positive number.`);
  return Math.round(size);

}
function clearGrill() {
  grillContainer.innerHTML = "";
}

function createGrill(size) {
  for (let i = 0; i < size; i++) {
    const line = initLine();
    for (let i = 0; i < size; i++) {
      const cell = initCell();
      line.append(cell);
    }
    grillContainer.append(line); // l'ajoute a grill Container
  }
}

createGrill(size);

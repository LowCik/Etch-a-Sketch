//Initialize component

const grillContainer = document.querySelector('.grill-container');
const sizeButton = document.querySelector('button.size');
const rainbowButton = document.querySelector('button.rainbow');
const greyButton = document.querySelector('button.greyScale');
const borderButton = document.querySelector('button.border');

let size = 16;
let behavior = "greyScale";


//change between rainbow and greyscale
rainbowButton.addEventListener('click', () => {
  behavior = 'rainbow';
});

greyButton.addEventListener('click', () => {
  behavior = 'greyScale';
});

borderButton.addEventListener('click', () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    if (cell.classList.contains("with-border")) {
      cell.classList.remove("with-border");
    } else {
      cell.classList.add("with-border");
    }
  })
})


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
  cell.classList.add('with-border');
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
      const currentBgColor = getComputedStyle(cell).backgroundColor;
      const rgb = currentBgColor.split(',');
      let r = parseInt(rgb[0].split('(')[1]); //split au niveau du '(' et selectionne la deuxieme partie
      let g = parseInt(rgb[1]);//deja bien séparé
      let b = parseInt(rgb[2].split(')')[0])// récupère le avant le ')'

      return cell.style.backgroundColor = `rgb(${r * 0.7},${g * 0.7},${b * 0.7})`;
      break;
    case 'colored':
      break;
  }
}
function askSize() {
  let size = prompt(`Enter a number.`)
  while (Math.round(size) <= 0 || Math.round(size) > 64)
    size = prompt(`Enter a strictly positive number between 1 and 64`);
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

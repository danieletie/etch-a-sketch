let grid = document.querySelector('.grid');
let gridSize = 0;
let cellOpacity = 0;

let numOfSquares = document.querySelector('.grid-size');



numOfSquares.addEventListener('click', () => {

  //run remove grid function to remove existing grid
  if (gridSize !== null) {
    removeGrid();
  }else {
    prompt('Please enter a valid number');
  };

  //prompt to input size of new grid
  gridSize = prompt('Please enter a number: ');

  //check to make sure input is a number between 1 and 100
  if (isNaN(gridSize)) {
    alert('That\'s not a valid number. Please try again'); 
  } else if ((Number(gridSize)) <= 0 || (Number(gridSize)) > 100){
    alert(`Please enter avalue between 1 and 100`);
  } else {
    gridSize = Number(gridSize);
    console.log(gridSize);
    //run function to create grid based on number of squares inputed
    createGrid();
    createSketch();
  };
});


function createGrid() {
  let cellSize = 500 / gridSize;
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      grid.appendChild(cell);
      cell.style.height = cellSize + "px";
      cell.style.width = cellSize + "px";
    };
  };
};


function removeGrid () {
  for (let i = gridSize; i > 0; i--) {
    for (let j = gridSize; j > 0; j--) {
      let emptyCell = document.querySelector('.cell');
      emptyCell.remove();
    };
  };
};


function createSketch () {

  let cellTarget = document.querySelectorAll('.cell');
  let holding = false;
  cellTarget.forEach((cell) => {
    cell.addEventListener('mouseenter', (e) => {
      cell.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255 ) + ', ' + Math.floor(Math.random() * 255 ) + ', ' + Math.floor(Math.random() * 255 ) + ')';      
        if (cellOpacity < 100) {
          cellOpacity++;
          console.log(cellOpacity);
          cell.style.opacity = cellOpacity/100;
        } else {
          cellOpacity = 100;
          console.log(cellOpacity);
          cell.style.opacity = cellOpacity/100;
        }; 
    });
  });
};


const containerElement = document.getElementById("container");

const buttonElement = document.querySelector("button");

const inputIsValid = (input) => {
  return input && input <= 100 && input >= 0;
};

const displayGrid = () => {
  let numberOfSquares;
  do {
    numberOfSquares = Number(
      prompt("How many squares per side do you want for your grid? (max 100)")
    );
  } while (!inputIsValid(numberOfSquares));

  containerElement.innerHTML = "";

  for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
    const divElement = document.createElement("div");
    divElement.style.boxSizing = "border-box";
    divElement.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;
    containerElement.appendChild(divElement);
  }

  Array.from(containerElement.children).forEach((child) => {
    child.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )})`;
    });
  });

  containerElement.style.display = "grid";
  containerElement.style.gridTemplateColumns = `repeat(${numberOfSquares}, auto)`;
  containerElement.style.gridTemplateRows = `repeat(${numberOfSquares}, auto)`;
};

buttonElement.addEventListener("click", displayGrid);

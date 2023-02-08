

const buttonChangeColor = document.querySelector('.change-color');
const colorLabel = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonChangeColor.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorLabel.textContent = document.body.style.backgroundColor;
});


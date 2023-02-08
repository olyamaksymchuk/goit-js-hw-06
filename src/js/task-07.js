const input = document.querySelector("#font-size-control");
const textLabel = document.querySelector("#text");

input.addEventListener("input", (event) => {
    console.log(`${event.currentTarget.value}px`);
    console.log(textLabel.style.fontSize = `${event.currentTarget.value}px`);
} )
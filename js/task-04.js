const counterValue = {
    value:0,

    increment() {
        console.log('increment => this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement => this', this);
        this.value -= 1;
 },
}


const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");



decrementBtn.addEventListener('click',  event => {
    console.log("клікнути на декремент");

    counterValue.decrement();
    console.log(counterValue);
    decrementBtn.textContent = counterValue.value;
    valueEl.textContent = counterValue.value;
}
)

incrementBtn.addEventListener('click',  event => {
    console.log("клікнути на інкремент");
    counterValue.increment();
    console.log(counterValue);
    incrementBtn.textContent = counterValue.value;
    valueEl.textContent = counterValue.value;
})


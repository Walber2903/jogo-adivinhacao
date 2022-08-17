//Events
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

const randomNumber = Math.round(Math.random() * 10);

let attempts = 1;

//Events
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);

//Callbacks functions
function handleTryClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");

    console.log(attempts);
    console.log(randomNumber);
    typeof(randomNumber)

    if(Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide");
        screen2.classList.remove("hide");
        
        document
            .querySelector(".screen2 h2")
            .innerText = `Voce acertou em ${attempts} tentativas! O número escolhido era ${randomNumber}`
    }

    inputNumber.value = "";

    attempts++;
}

function handleResetClick() {
    screen1.classList.remove("hide");
    screen2.classList.add("hide");
    attempts = 1;
}


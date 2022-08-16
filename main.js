const randomNumber = Math.round(Math.random() * 10);

let attempts = 1;

function handleClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");

    console.log(attempts);
    console.log(randomNumber);
    typeof(randomNumber)

    if(Number(inputNumber.value) == randomNumber) {
        document.querySelector(".screen1").classList.add("hide");
        document.querySelector(".screen2").classList.remove("hide");

        console.log(`Voce acertou em ${attempts} tentativas! O numero escolhido era ${randomNumber}`)
    }

    attempts++;
}
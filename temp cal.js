function conditionCheck() {
    let temp = +document.querySelector("#temp").value;
    let resultElement = document.querySelector("#result");

    if (temp >= 45) {
        resultElement.innerHTML = "It's too hot!";
    } else if (temp >= 25) {
        resultElement.innerHTML = "It's pleasant outside.";
    } else if (temp >= 20) {
        resultElement.innerHTML = "If you are riding a bike, please carry a jacket.";
    } else if (temp >= 10) {
        resultElement.innerHTML = "You probably need a jacket.";
    } else if (temp >= 1) {
        resultElement.innerHTML = "You probably need a double jacket.";
    } else {
        resultElement.innerHTML = "It's freezing outside.";
    }
}


const inputNum1 = document.getElementById('num1');
const inputNum2 = document.getElementById('num2');
const wybor = document.getElementById('operacja');
const przycisk_oblicz = document.getElementById('oblicz');
const wyniki = document.getElementById('okno-wynikow');

przycisk_oblicz.addEventListener('click', function() {

    const num1 = parseFloat(inputNum1.value);
    const num2 = parseFloat(inputNum2.value);

    const operacja = wybor.value;
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        wyniki.textContent = "Wpisz liczby";
        return;
    }

    if (operacja === '+') {
        result = num1 + num2;
    }
    else if (operacja === '-') {
        result = num1 - num2;
    }
    else if (operacja === '*') {
        result = num1 * num2;
    }
    else if (operacja === '/') {
        if (num2 === 0) {
            wyniki.textContent = "Nie można dzielić przez zero";
            return;
        }
        result = num1 / num2;
    }

    wyniki.textContent = result;
});
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const container = document.getElementById('container');

//Przycisk 1
btn1.addEventListener('click', function() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('box');
    newDiv.textContent = 'Kolejny div';
    container.appendChild(newDiv);
});

//Przycisk 2
btn2.addEventListener('click', function() {
    const firstDiv = container.firstElementChild;
    if (firstDiv) {
        container.removeChild(firstDiv);
    }
});

//Przycisk 3
btn3.addEventListener('click', function() {
    const divs = container.querySelectorAll('.box');
    if (divs.length >= 3) {
        divs[2].style.backgroundColor = 'lightblue';
    }
});

//Przycisk 4
btn4.addEventListener('click', function() {
    const divs = container.querySelectorAll('.box');
    for (let i = 0; i < divs.length; i++) {
        divs[i].textContent = 'nowy tekst';
    }
});
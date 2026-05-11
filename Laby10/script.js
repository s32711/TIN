const url = 'http://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php';

let poprzedniStan = {};
let newsy = [];
let indeksNewsa = 0;

async function pobierzDane() {
        const odpowiedz = await fetch(url);
        const data = await odpowiedz.json();
        updateTabeli(data.stock);
        updateRotatora(data.news);
}

function updateTabeli(aktualnyStan) {
    const tbody = document.getElementById('stock-body');
    tbody.innerHTML = '';

    for (const firma in aktualnyStan) {
        const aktualnaCena = aktualnyStan[firma];
        const poprzedniaCena = poprzedniStan[firma];

        let ikonka = '—';
        let klasa = 'bez-zmian';

        if (aktualnaCena > poprzedniaCena) {
            ikonka = '&#129033';
            klasa = 'wzrost';
        } else if (aktualnaCena < poprzedniaCena) {
            ikonka = '&#129035';
            klasa = 'spadek';
        }
        
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${firma}</td><td><strong>${aktualnaCena}</strong></td><td class="${klasa}">${ikonka}</td>`;
        tbody.appendChild(tr);
    }
    poprzedniStan = aktualnyStan;
}

function updateRotatora(nowyNews) {
    if (nowyNews && nowyNews !== newsy[newsy.length - 1]) {
        newsy.push(nowyNews);
        if (newsy.length > 3) {
            newsy.shift();
        }
    }
}

function zmieniajNews() {
    const newsyContainer = document.getElementById('newsy-rotator');
    if (newsy.length > 0) {
        newsyContainer.innerText = newsy[indeksNewsa];
        indeksNewsa = (indeksNewsa + 1) % newsy.length;
    }
}

pobierzDane();
setInterval(pobierzDane, 5000);
setInterval(zmieniajNews, 2000);
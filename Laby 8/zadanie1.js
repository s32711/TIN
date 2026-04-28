class Auto {
    constructor(rok, przebieg, cena_wyjsciowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = this.obliczCeneKoncowa();
    }

    obliczCeneKoncowa() {
        let cena = this.cena_wyjsciowa;
        const aktualnyRok = 2026;
        const wiek = aktualnyRok - this.rok;

        if (wiek > 0) {
            cena -= (wiek * 1000);
        }
        const krotnosciPrzebiegu = Math.floor(this.przebieg / 100000);
        cena -= (krotnosciPrzebiegu * 10000);
        return cena;
    }
}

const tablicaSamochodow = [
    new Auto(2024, 100000, 40000),
    new Auto(2020, 250000, 50000),
    new Auto(2025, 50000, 80000)
];

function generujTabeleAut(auta) {
    const tabela = document.createElement('table');

    const naglowek = document.createElement('tr');
    const kolumny = ['Rok', 'Przebieg', 'Cena Wyjściowa', 'Cena Końcowa'];

    kolumny.forEach(nazwa => {
        const th = document.createElement('th');
        th.textContent = nazwa;
        naglowek.appendChild(th);
    });
    tabela.appendChild(naglowek);

    auta.forEach(auto => {
        const wiersz = document.createElement('tr');
        const dane = [auto.rok, auto.przebieg, auto.cena_wyjsciowa, auto.cena_koncowa];
        dane.forEach(wartosc => {
            const td = document.createElement('td');
            td.textContent = wartosc;
            wiersz.appendChild(td);
        });
        tabela.appendChild(wiersz);
    });

    const pojemnik = document.getElementById('tabela-container');
    pojemnik.appendChild(tabela);
}
generujTabeleAut(tablicaSamochodow);
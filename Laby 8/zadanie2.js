class Ocena {
    constructor(przedmiot, wartosc) {
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
}

class Student {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.oceny = [];
        this.srednia = 0;
    }

    dodajOcene(przedmiot, wartosc) {
        this.oceny.push(new Ocena(przedmiot, wartosc));
        this.przeliczSrednia();
    }

    przeliczSrednia() {
        if (this.oceny.length === 0) return;
        let suma = 0;
        this.oceny.forEach(o => suma += o.wartosc);
        this.srednia = Math.round((suma / this.oceny.length) * 100) / 100;
    }
}

// 1. Tworzenie danych
const s1 = new Student('Jan', 'Kowalski');
s1.dodajOcene('WPR', 5);
s1.dodajOcene('TIN', 3);
s1.dodajOcene('POJ', 4);

const s2 = new Student('Anna', 'Nowak');
s2.dodajOcene('WPR', 3);
s2.dodajOcene('TIN', 5);
s2.dodajOcene('POJ', 4);

const s3 = new Student('Jan', 'Trzeci');
s3.dodajOcene('WPR', 5);
s3.dodajOcene('TIN', 5);
s3.dodajOcene('POJ', 2);

const tablicaStudentow = [s1, s2, s3];

// 2. Budowanie struktury na stronie
function zbudujAkordeon(studenci) {
    const glownyPojemnik = document.getElementById('akordeon');

    studenci.forEach(student => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('student-wrapper'); // Dodane dla spójnych ramek w CSS

        const belka = document.createElement('div');
        belka.classList.add('student-belka');
        belka.textContent = `${student.imie} ${student.nazwisko}`;

        const detale = document.createElement('div');
        detale.classList.add('student-detale');

        const listaOcen = document.createElement('ul');
        student.oceny.forEach(ocena => {
            const li = document.createElement('li');
            li.textContent = `${ocena.przedmiot}: ${ocena.wartosc}`;
            listaOcen.appendChild(li);
        });

        const divSrednia = document.createElement('div');
        divSrednia.classList.add('srednia-tekst');
        divSrednia.textContent = `Średnia: ${student.srednia}`;

        detale.appendChild(listaOcen);
        detale.appendChild(divSrednia);

        // Zdarzenie kliknięcia (zwijanie/rozwijanie)
        belka.addEventListener('click', () => {
            belka.classList.toggle('rozwiniety');
            detale.classList.toggle('pokaz');
        });

        wrapper.appendChild(belka);
        wrapper.appendChild(detale);
        glownyPojemnik.appendChild(wrapper);
    });
}

zbudujAkordeon(tablicaStudentow);
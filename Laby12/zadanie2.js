import fs from 'fs';
const akcja = process.argv[2];
const nazwaPliku = process.argv[3];
const tekst = process.argv[4];

if (akcja === 'open') {
    if (fs.existsSync(nazwaPliku)) {
        const zawartosc = fs.readFileSync(nazwaPliku, 'utf8');
        console.log("Zawartość pliku " + nazwaPliku + ": " + zawartosc);
    } else {
        console.log("Plik " + nazwaPliku + " nie istnieje");
    }
} else if (akcja === 'append') {
    fs.appendFileSync(nazwaPliku, tekst);
    console.log("Zapisałem do pliku " + nazwaPliku + ": " + tekst);
} else if (akcja === 'delete') {
    if (fs.existsSync(nazwaPliku)) {
        fs.unlinkSync(nazwaPliku);
        console.log("Usunąłem plik " + nazwaPliku);
    } else {
        console.log("Plik " + nazwaPliku + " nie istnieje");
    }
} else {
    console.log("Użyj: open, append lub delete.");
}
const http = require('http');
const fs = require('fs');
const url = require('url');

const serwer = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const plik = parsedUrl.pathname.substring(1);

    if (req.method === 'GET') {
        fs.readFile(plik, 'utf8', (err, zawartosc) => {
            res.end(`Zawartosc pliku ${plik}: ${zawartosc}`);
        });
    }
    else if (req.method === 'POST') {
        fs.appendFile(plik, parsedUrl.query.tresc, () => {
            res.end('Dopisano zawartosc');
        });
    }
    else if (req.method === 'DELETE') {
        fs.unlink(plik, () => {
            res.end('Usunieto plik');
        });
    }
});

serwer.listen(3000, () => {
    console.log('Serwer działa na porcie 3000');
});
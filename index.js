const beli = require('./beli.js');

class Belanja {
    constructor(item, harga, waktu) {
        this.item = item;
        this.harga = harga;
        this.waktu = waktu;
    }
}

const permen = new Belanja('permen', 1000, 3000);
const esKrim = new Belanja('es krim', 4000, 5000);
const mie = new Belanja('mie', 5000, 4000);
const donat = new Belanja('donut', 2000, 2000);
const jus = new Belanja('jus', 5000, 4000);

beli(15000, permen, (sisaUang) => {
    beli(sisaUang, esKrim, (sisaUang) => {
        beli(sisaUang, mie, (sisaUang) => {
            beli(sisaUang, donat, (sisaUang) => {
                beli(sisaUang, jus, (sisaUang) => {
                    console.log(`Sisa uang saya ${sisaUang}`);
                })
            })
        })
    })
})
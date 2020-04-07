const beli = require('./beli.js');

class LetShopping {
    constructor(item, harga, waktu) {
        this.item = item
        this.harga = harga
        this.waktu = waktu
    }
}

const mamipoko = new LetShopping('mamipoko', 50000, 500);
const sgm = new LetShopping('SGM 3+', 46000, 1000);
const bCrunch = new LetShopping('Banana Crunch', 15000, 700);
const roti = new LetShopping('Roti Tawar', 12000, 300);
const cemilan = new LetShopping('Rengginang', 5000, 500);

beli(300000, mamipoko, uang => {
    beli(uang, sgm, uang => {
        beli(uang, bCrunch, uang => {
            beli(uang, roti, uang => {
                beli(uang, cemilan, uang => {
                    console.log('Semua item sudah di beli')
                })
            })
        })
    })
})
const beli = require('./beli.js');

class ListBelanja {
    constructor(item, harga, waktu) {
        this.item = item
        this.harga = harga
        this.waktu = waktu
    }
}

const permen = new ListBelanja('Permen', 50000, 300);
const roti = new ListBelanja('Roti', 12000, 400);
const cilok = new ListBelanja('Cilok', 46000, 500);
const batagor = new ListBelanja('Batagor', 15000, 700);
const cemilan = new ListBelanja('Cemilan', 5000, 900);

beli(100000, permen, uang => {
    beli(uang, roti, uang => {
        beli(uang, batagor, uang => {
            beli(uang, cilok, uang => {
                beli(uang, cemilan, uang => {
                    if (beli.kembalian >= 0) {
                        console.log('Semua item sudah dibeli')
                    } else {
                        console.log('Ada item yg belum dibeli, gaes..');
                    }
                })
            })
        })
    })
}) 
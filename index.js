const beli = require('./beli.js');

class shopping {
  constructor(item, harga, waktu) {
    this.item = item
    this.harga = harga
    this.waktu = waktu
  }
}

const permen = new shopping('permen', 50000, 500);
const sereal = new shopping('sereal', 46000, 1000);
const vitamin = new shopping('vitamin', 15000, 700);
const minuman = new shopping('minuman', 12000, 300);
const snack = new shopping('snack', 5000, 500);

console.log(`Ayo kita belanja!`)
beli(300000, permen, uang => {
  beli(uang, sereal, uang => {
    beli(uang, vitamin, uang => {
      beli(uang, minuman, uang => {
        beli(uang, snack, uang => {
          console.log(`Belanja selesai~`)
        })
      })
    })
  })
}) 
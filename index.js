
const permen = {
  item: "permen",
  harga: "2000",
  waktu: 1000
}

let roti = {
    item: "roti",
    harga: "5000",
    waktu: 3000
  }
let tempe = {
    item: "tempe",
    harga: "4000",
    waktu: 1000
  }

let coklat = {
    item: "coklat",
    harga: "5000",
    waktu: 1000
  }

let ikan = {
    item: "ikan",
    harga: "4500",
    waktu: 1000
  }

const beli = require('./beli');

let uang = 50000;
beli(uang, permen,(kembalian) => {
  beli(kembalian, roti, (kembalian) => {
    beli(kembalian, tempe, (kembalian) => {
      beli(kembalian, coklat, (kembalian) => {
        beli(kembalian, ikan, (kembalian) => {
          console.log(`Total belanjaannya adalah ${uang - kembalian}`);
        })
      })
    })
  })
});

const beli = require('./beli.js')

class Groceries {
  constructor(item, harga, time){
    this.item = item
    this.harga = harga
    this.time = time
  }
}

let permen = new Groceries('permen', 1000, 1000)
let roti = new Groceries('roti', 2000, 2000)
let chiki = new Groceries('chiki', 3000, 3000)
let esKrim = new Groceries('es krim', 7000, 4000)
let coklat = new Groceries('coklat', 10000, 5000)

beli(25000, permen, (kembaliPertama) =>{
  beli(kembaliPertama, roti, (kembaliKedua) =>{
    beli(kembaliKedua, chiki, (kembaliKetiga) =>{
      beli(kembaliKetiga, esKrim, (kembaliKeempat) =>{
        beli(kembaliKeempat, coklat, (kembaliKelima) =>{
          if (kembaliKelima >= 0){
            console.log(`uang kembalian nya sisa Rp.${kembaliKelima}`)
          }
        })
      })
    })
  })
})
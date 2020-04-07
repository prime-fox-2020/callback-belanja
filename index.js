const beli = require('./beli')

class Barang {
    constructor(item, harga, waktu) {
        this.item = item,
            this.harga = harga,
            this.waktu = waktu
    }
}

let permen = new Barang("permen", 2000, 1000)
let roti = new Barang("roti", 5000, 800)
let susu = new Barang("susu", 8000, 600)
let snack = new Barang("snack", 4000, 400)
let sabun = new Barang("sabun", 2500, 500)

console.clear();
beli(9000, permen, ((uang) => {
    beli(uang, roti, ((uang) => {
        beli(uang, susu, ((uang) => {
            beli(uang, snack, ((uang) => {
                beli(uang, sabun, (()=>{}))
            }))
        }))
    }))
}))
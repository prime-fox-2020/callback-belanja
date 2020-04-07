const beli = require('./beli')

class Barang {
    constructor(item, harga, waktu) {
        this.item = item
        this.harga = harga
        this.waktu = waktu
    }
}

let uang = 100000
let permen = new Barang('Permen', 2000, 1000)
let roti = new Barang('Roti', 5000, 1000)
let beras = new Barang('Beras', 25000, 3000)
let kopi = new Barang('Kopi', 10000, 1000)
let gula = new Barang('Gula', 20000, 2000)

beli(uang, permen, (kembalian) => {
    beli(kembalian, roti, (kembalian) => {
        beli(kembalian, beras, (kembalian) => {
            beli(kembalian, kopi, (kembalian) => {
                beli(kembalian, gula, (kembalian) => {
                    if(kembalian >= 0) {
                        console.log('semua barang udah dibeli, selesai deh belanjanya')
                    }
                })
            })
        })
    })
})
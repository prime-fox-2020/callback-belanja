const beli = require('./beli')

class Barang{
    constructor(inputItem, inputHarga, inputWaktu){
        this.item = inputItem
        this.harga = inputHarga
        this.waktu = inputWaktu
    }
}

//item
let uang = 50000
let soto = new Barang('Soto', 10000, 1000)
let esTeh = new Barang('Es Teh', 5000, 1000)
let cilok = new Barang('Cilok ', 3000, 1000)

beli(uang, soto, (kembalian) => {
    beli(kembalian, esTeh, (kembalian) => {
        beli(kembalian, cilok, (kembalian) => {
            console.log(`Saya sudah kenyang, sisa uang ${kembalian}`)
        })
    })
})

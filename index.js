let beli = require("./beli")

class BarangBelanjaan {
    constructor(item, harga, waktu) {
        this.item = item
        this.harga = harga
        this.waktu = waktu
    }
}
  
  
let permen = new BarangBelanjaan("Permen", 10000, 1000)
let roti = new BarangBelanjaan("Roti", 18000, 1000)
let sabun = new BarangBelanjaan("Sabun", 30000, 1000)
let shampo = new BarangBelanjaan("Shampo", 50000, 1000)
let rokok = new BarangBelanjaan("Rokok", 25000, 1000)

console.clear()
let uangAwal = 100000
beli(uangAwal, permen, function(sisaUang) {
  beli(sisaUang, roti, function(sisaUang) {
    beli(sisaUang, sabun, function(sisaUang) {
      beli(sisaUang, shampo, function(sisaUang) {
        beli(sisaUang, rokok, function() {})
      })
    })
  })
})
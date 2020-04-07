const beli = require('./beli')
class Food {
    constructor(item, harga, waktu) {
        this.item = item
        this.harga = harga
        this.waktu = waktu
    }
}

let bakwan = new Food('bakwan', 1000, 500)
let tahu = new Food('tahu', 2000, 800)
let martabak = new Food('martabak', 10000, 1000)
let mie = new Food('mie', 7500, 600)
let bakso = new Food('bakso', 8000, 400)

console.clear()
beli(30000, bakwan, ((uang) => {
    beli(uang, tahu, ((uang) => {
        beli(uang, martabak, ((uang) => {
            beli(uang, mie, ((uang) => {
                beli (uang, bakso, (()=>{

                }))
            }))
        }))
    }))
}))

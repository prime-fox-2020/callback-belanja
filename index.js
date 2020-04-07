const beli = require('./beli')

class Shopping {
    constructor(item,harga,waktu){
        this.item = item
        this.harga = harga
        this.waktu = waktu
    }
}

let permen = new Shopping("Permen",3000,1000)
let roti = new Shopping("Roti",5000,500)
let gula= new Shopping("Gula",1000,500)
let kopi = new Shopping("Kopi",2000,3000)
let susu = new Shopping("Susu",5000,1500)


let uang =5000
beli(uang,permen,(uang) => {
    console.log("123")
    beli(uang,roti,(uang) => {
        beli(uang,gula,(uang) => {
            beli(uang,kopi,(uang) => {
                beli(uang,susu,() => {
                })                  
            })
        })
    })
})

console.log("string")
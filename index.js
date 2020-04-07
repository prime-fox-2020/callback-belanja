const beli = require('./beli.js')

let coklat = {
  item : 'coklat',
  harga : 25000,
  waktu : 1500
}
let keju = {
  item : 'keju',
  harga : 30000,
  waktu : 1000
}
let cream = {
  item : 'cream',
  harga : 10000,
  waktu : 2000
}
let susu = {
  item : 'susu',
  harga : 15000,
  waktu : 1000
}
let sugar = {
  item : 'sugar',
  harga : 8000,
  waktu : 2000
}

beli(100000,coklat, (uang) => {
  beli(uang, keju, (uang) => {
    beli(uang, cream, (uang) => {
      beli(uang, susu, (uang) =>{
        beli(uang, sugar, () => {
        })
      })
    })
  })
})

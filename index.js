const beli = require('./beli');

let sayur = {
  item: 'sayur',
  harga: 5000,
  waktu: 1000
}

let permen = {
  item: 'permen',
  harga: 500,
  waktu: 250
}

let roti = {
  item: 'roti',
  harga: 2000,
  waktu: 500
}

let air = {
  item: 'air',
  harga: 1000,
  waktu: 900
}

let micin = {
  item: 'micin',
  harga: 1500,
  waktu: 800
}

beli(15000, permen, function(uang) {
  beli(uang, roti, function(uang) {
    beli(uang, sayur, function(uang){
      beli(uang, air, function(uang) {
        beli(uang, micin, function(uang){})
      })
    })
  })
});
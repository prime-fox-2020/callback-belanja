function belanja(){ // list of belanjaan
  function beliNasdang(uang, cb){ // with default cb param
  let obj = { 
    item: 'Nasi Padang',
    harga: 15000,
    banyak: 2
  }
  uang -= (obj.harga * obj.banyak)
  console.log(`Sisa uang belanja ${obj.item} adalah Rp${uang},-`)
  cb(uang)
}

function beliNasgor(sisaUang, cb){
  let obj = {
    item: 'Nasi Goreng',
    harga: 10000,
    banyak: 5
  }
  sisaUang -= (obj.harga * obj.banyak)
  console.log(`Sisa uang belanja ${obj.item} adalah Rp${sisaUang},-`)
  cb(sisaUang)
}

function beliNasduk(sisaUang, cb){
  let obj = {
    item: 'Nasi Uduk',
    harga: 5000,
    banyak: 5
  }
  sisaUang -= (obj.harga * obj.banyak)
  console.log(`Sisa uang belanja ${obj.item} adalah Rp${sisaUang},-`)
  cb(sisaUang)
}

function beliMiegor(sisaUang, cb){
  let obj = {
    item: 'Mie Goreng',
    harga: 9500,
    banyak: 3
  }
  sisaUang -= (obj.harga * obj.banyak)
  console.log(`Sisa uang belanja ${obj.item} adalah Rp${sisaUang},-`)
  cb(sisaUang)
}

function beliMiereb(sisaUang, cb){
  let obj = {
    item: 'Mie Rebus',
    harga: 9500,
    banyak: 7
  }
  sisaUang -= (obj.harga * obj.banyak)
  console.log(`Sisa uang belanja ${obj.item} adalah Rp${sisaUang},-`)
  cb(sisaUang)
}

let uang = 200001


// drive code
console.log(`saya mempunyai uang ${uang}`)
beliNasdang(uang, (sisaUang)=>{
  beliNasgor(sisaUang, (sisaUang)=>{
    beliNasduk(sisaUang, (sisaUang)=>{
      beliMiegor(sisaUang, (sisaUang)=>{
        beliMiereb(sisaUang, ()=>{

        })
      })
    })
  })
})
}

// summon function
belanja();
module.exports = belanja;
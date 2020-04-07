let beli = require ("./beli.js")


let zaku1 = {item:"zaku1",harga:4000,waktu:1000}
let zaku2 = {item:"zaku2",harga:5000,waktu:1000}
let zaku3 = {item:"zaku3",harga:6000,waktu:1000}

beli(15000,zaku1,sisa=>{
    beli(sisa,zaku2,sisa=>{
        beli(sisa,zaku3,sisa=>{
            console.log(sisa)
        })
    })
})
const Beli = require('./beli')




 Beli(20000, {item: 'permen', harga: 1000, waktu: 1000}, (uang) =>{
   Beli(uang, {item: 'samsu', harga: 3000, waktu: 1000}, (uang) =>{
     Beli(uang, {item: 'keran', harga: 4000, waktu: 1000}, (uang) =>{
       Beli(uang, {item: 'sendal', harga: 6000, waktu: 1000}, (uang) =>{
        Beli(uang, {item: 'bando', harga: 4000, waktu: 1000}, (uang)=>{
          Beli(uang, {item: 'batu', harga: 2000, waktu: 1000}, (uang) =>{
          
          })
        })
       })
     })
   })
 })
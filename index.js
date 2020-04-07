var funcBeli = require('./beli.js')
// console.log(funcBeli)

funcBeli(20000, {
    item: 'amplas',
    harga: 3000,
    waktu: 200
}, function (kembalian) {
    funcBeli((kembalian), {
        item:'coki-coki',
        harga: 3000,
        waktu: 1000
    }, function(kembalian) {
        funcBeli((kembalian), {
            item: 'kopiko',
            harga: 1000,
            waktu: 200
        }, function(kembalian){
            funcBeli((kembalian), {
                item: 'rolex',
                harga: 2990,
                waktu: 4000
            }, function(kembalian){
                funcBeli((kembalian), {
                    item: 'nasi padang', 
                    harga: 11000, 
                    waktu: 3000
                }, function(kembalian){
                    console.log(`yaudah skrng nabung lagi ya`)
                })
            })
        })
    })
})
 

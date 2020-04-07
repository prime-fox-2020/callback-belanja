let beli = require('./beli')

let obj1 = {
    item : 'oppo A5S',
    harga : 1500000,
    waktu : 6000
}
let obj2 = {
    item : 'balon',
    harga : 1000,
    waktu : 5000
}
let obj3 = {
    item : 'cilok',
    harga : 5000,
    waktu : 10000
}
let obj4 = {
    item : 'sabun',
    harga : 10000,
    waktu : 10000
}
let obj5 = {
    item : 'Iphone XS',
    harga : 11000000,
    waktu : 10000
}


beli(5000000, obj1, (uang) => {
    beli(uang, obj2, (uang) => {
        beli(uang, obj3, (uang) => {
            beli(uang, obj4, (uang) => {
                beli(uang, obj5, (uang) => {
                
                })
            })
        })
    })
});
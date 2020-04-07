const beli = require ('./beli')

let barang1 = {
    item : 'permen',
    harga : 1000,
    waktu : 1000
}

let barang2 = {
    item : 'roti',
    harga : 8000,
    waktu : 2000
}

let barang3 = {
    item : 'nasi',
    harga : 8000,
    waktu : 5000
}

let barang4 = {
    item : 'teh pucuk',
    harga : 8000,
    waktu : 2000
}

let barang5 = {
    item : 'mainan',
    harga : 8000,
    waktu : 3000
}

beli (100000, barang1, (uang) => {
    beli(uang, barang2, (uang) => {
        beli(uang, barang3, (uang) => {
            beli(uang, barang4, (uang) => {
                beli(uang, barang5, () => {

                })
            })
        })
    }) 
})
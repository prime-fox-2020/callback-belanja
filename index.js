const beli = require('./beli.js')

let objBarang = [
    {
        item: 'Hepi Mil',
        harga: 21500,
        waktu: 500
    },
    {
        item: 'KAEPCI',
        harga: 52000,
        waktu: 1000
    },
    {
        item: 'AWW',
        harga: 23000,
        waktu: 1500
    },
    {
        item: 'Wendiz',
        harga: 15000,
        waktu: 500
    },
    {
        item: 'CIEPCI',
        harga: 20000,
        waktu: 1000
    }
]

beli(250000,objBarang[0],kembalian => {
    beli(kembalian, objBarang[1], kembalian => {
        beli(kembalian, objBarang[2], kembalian => {
            beli(kembalian, objBarang[3], kembalian => {
                beli(kembalian, objBarang[4], kembalian => {
                    console.log(kembalian)
                })
            })
        })
    })
})
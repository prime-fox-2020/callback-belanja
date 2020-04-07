let beli = require('./beli.js')

let listBelanja = [{
    item: 'roti',
    harga: 5000,
    waktu: 5000

},
{
    item: 'susu',
    harga: 10000,
    waktu: 3000
},
{
    item: 'telur',
    harga: 3000,
    waktu: 7000
},
{
    item: 'beras',
    harga: 15000,
    waktu: 5000
},
{
    item: 'ayam',
    harga: 30000,
    waktu: 4000
}
]

beli(100000, listBelanja[0], kembalian => {
    beli(kembalian, listBelanja[1], kembalian => {
        beli(kembalian, listBelanja[2], kembalian => {
            beli(kembalian, listBelanja[3], kembalian => {
                beli(kembalian, listBelanja[4], kembalian => {
                    console.log(`uang kembalian adalah ${kembalian}`)
                })
            })
        })
    })
})

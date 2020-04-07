const beli = require("./beli")

const items = [
{   item : 'rumah',
    harga: 500000,
    waktu : 1000
},
{   item : 'mobil',
    harga: 300000,
    waktu : 2000
},
{   item : 'motor',
    harga: 40000,
    waktu : 3000
},
{   item: 'jet pribadi',
    harga: 700000,
    waktu : 4000
},
{   item: 'rumah sakit',
    harga: 5500000,
    waktu : 5000
}]

beli(1500000,items[0],(kembalian) => {
    beli(kembalian,items[1],(kembalian) => {
        beli(kembalian,items[2],(kembalian) => {
            beli(kembalian,items[3],(kembalian) => {
                beli(kembalian,items[4],(kembalian) => {
                    console.log(`uang tinggal ${kembalian}`)
                })
            })
        })
    })
})
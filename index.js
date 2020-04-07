const AnakSoleh = require('./anak-soleh')
const beli = require('./beli')

const daftarBelanja = [
  {
    item: 'beras',
    harga: 12000,
    waktu: 2000
  },
  {
    item: 'telur',
    harga: 15000,
    waktu: 2000
  },
  {
    item: 'sabun',
    harga: 4000,
    waktu: 2000
  },
  {
    item: 'pasta gigi',
    harga: 3500,
    waktu: 2000
  },
  {
    item: 'es kuncir',
    harga: 2000,
    waktu: 2000
  }
]

const budi = new AnakSoleh('Budi', beli)
console.log(budi)
budi.tolongMama(30000, daftarBelanja, budi._beli)
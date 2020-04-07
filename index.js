'use strict'

const beli = require('./beli')

const barang = [
  { item: 'permen', harga: 13000, waktu: 2000 },
  { item: 'roti', harga: 18000, waktu: 2000 },
  { item: 'nasi goreng', harga: 25000, waktu: 2000 },
  { item: 'bakso', harga: 30000, waktu: 2000 },
  { item: 'nasi padang', harga: 40000, waktu: 2000 }
]

beli(150000, barang[0], function (kembalian) {
    beli(kembalian, barang[1], function (kembalian) {
      beli(kembalian, barang[2], function (kembalian) {
        beli(kembalian, barang[3], function (kembalian) {
          beli(kembalian, barang[4], function (kembalian) {
          })
        })
      })
    })
  })
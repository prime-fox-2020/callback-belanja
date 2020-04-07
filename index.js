const beli = require('./beli.js');

const barang= [
  {
    item : 'antangin',
    harga: 3000,
    waktu : 500
  },
  {
    item : 'madu',
    harga: 5000,
    waktu : 500

  },
  {
    item : 'amoxilin',
    harga: 10000,
    waktu : 500
    
  },
  {
    item: 'nasi goreng',
    harga: 5000,
    waktu : 500
  },
  {
    item: 'betadine',
    harga: 3000,
    waktu : 500

  }
];


beli(100000, barang[0], kembalian => {
  beli(kembalian, barang[1], kembalian => {
    beli(kembalian, barang[2], kembalian => {
      beli(kembalian, barang[3], kembalian => {
        beli(kembalian, barang[4], kembalian => {
          console.log('selesai');
        });
      });
    });
  });
});
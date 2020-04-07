function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    console.log(`Saya pergi membeli ${obj.item}`)
    let kembalian = uang - obj.harga
    if (kembalian >= 0) {
      console.log(`Sudah membeli ${obj.item}, harga ${obj.harga} kembali ${kembalian}`);
      cb(kembalian)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item} uang cuma ${uang}`);
      cb(uang)
    }
  }, obj.waktu);
}

module.exports = beli;

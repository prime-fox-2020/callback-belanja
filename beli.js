function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}, saya membawa uang ${uang}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (uang > obj.harga) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}\n`);
      cb(kembalian)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item} uang saya cuma ${uang}\n`);
      cb(uang)
    }
  }, obj.waktu);
}

module.exports = beli;

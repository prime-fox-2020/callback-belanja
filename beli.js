function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)

  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian >= 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{
      console.log(`Uang gk cukup nih buat beli ${obj.item}, kurang ${kembalian*-1}`);
      cb(uang)
    }
  }, obj.waktu);
}


module.exports = beli;

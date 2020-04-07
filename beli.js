function beli(uang, obj, callback){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga;
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      callback(kembalian);
    } else {
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
      callback(uang);
    }
  }, obj.waktu);
}

module.exports = beli;

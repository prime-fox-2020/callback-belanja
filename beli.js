function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.item} seharga ${obj.harga}, uang kembaliannya ${kembalian}`);
      if (cb !== undefined) cb(kembalian)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item} seharga ${obj.harga} uangnya sisa ${uang}`);
      if (cb !== undefined) cb(uang);
    }
  }, obj.waktu * 1000);
}

module.exports = beli;

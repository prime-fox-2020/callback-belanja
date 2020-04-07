const roti = {
    item : "roti",
    harga : 12000,
    waktu : 2000
}
const ikan = {
    item : "ikan",
    harga : 15000,
    waktu : 4000
}
const sayur = {
    item : "bayur",
    harga : 3000,
    waktu : 1000,
}
const buah = {
    item : "buah",
    harga : 7000,
    waktu : 5000,
}
const susu = {
    item : "susu",
    harga : 38000,
    waktu : 2000
}

const beli = require('./beli');

let uang = 50000;
beli(uang, roti, (kembalianRoti) => {
    beli(kembalianRoti, ikan, (kembalianIkan) => {
        beli(kembalianIkan, susu, (kembalianSusu) => {
            beli (kembalianSusu, sayur, (kembalianSayur) => {
                beli(kembalianSayur, buah, (kembalianBuah) => {
                    console.log(`Total belanjaan Rp ${uang - kembalianBuah}`);
                })
            }) 
        })
    })
});
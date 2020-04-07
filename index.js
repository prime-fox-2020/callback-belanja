let beli = require (`./beli.js`)

class ListBelanja{
    constructor(item,harga,waktu){
        this.item = item 
        this.harga = harga 
        this.waktu = waktu 

    }
}

let beliPermen = new ListBelanja(`Permen`,2000,500);
let beliRoti = new ListBelanja(`Roti`,5000,1000); 
let beliSusu = new ListBelanja(`Susu`,10000,1000);
let beliKacang = new ListBelanja(`Kacang`,3000,500);
let beliIceCream = new ListBelanja(`Ice Cream`,7000,1500);
let beliCoklat = new ListBelanja(`Coklat`,5000,750);

let uang = 50000;

beli(uang,beliPermen,kembalian1 =>{
    beli(kembalian1,beliRoti,kembalian2 =>{
        beli(kembalian2,beliSusu,kembalian3 =>{
            beli(kembalian3,beliKacang,kembalian4 =>{
                beli(kembalian4,beliIceCream,kembalian5 =>{
                    beli(kembalian5,beliCoklat,kembalian6 =>{
                        console.log( `Semua belanjaan sudah di beli dengan sisa uang ${kembalian6} `)
                    } )
                } )
            } )
        } )
    } )
} )

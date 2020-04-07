'use strict'

let beli = require('./beli.js');
let fs = require('fs');
let list = fs.readFileSync('./belanjaan.txt', 'utf8').split('\n');
let belanjaan = [];
for (let i in list) {
    let temp = list[i].split(',');
    let obj = {
        item: temp[0],
        harga: +temp[1],
        waktu: +temp[2]
    }
    belanjaan.push(obj);
}
console.log(belanjaan);

mulaiBelanja(0, belanjaan);

function mulaiBelanja (i, belanjaan){
    let j = i + 1;
    if (i == belanjaan.length - 1){
        return (sisa) => {beli(sisa, belanjaan[i])};
    }
    else if (i == 0) return beli(50000, belanjaan[i], mulaiBelanja(j, belanjaan));
    else return (sisa) => {beli(sisa, belanjaan[i], mulaiBelanja(j, belanjaan))};
}
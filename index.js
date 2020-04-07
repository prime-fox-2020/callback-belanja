const beli=require('./beli.js')

class Item{
    constructor(item,harga,waktu){
        this.item=item
        this.harga=harga
        this.waktu=waktu
    }
}


beli (100000,new Item('permen',1000,1000),(uang)=>{
    beli(uang,new Item('biskuit',3000,2000),(sisaPertama)=>{
        beli(sisaPertama,new Item('cola',10000,3000),(sisaKedua)=>{
            beli(sisaKedua,new Item('rice cooker',40000,4000),(sisaKetiga)=>{
                beli(sisaKetiga,new Item('chitato',5000,1000),(sisaKeempat)=>{
                    console.log(`Sisa uang saya setelah belanja ${sisaKeempat}`)
                })
            })
        })
    })
})
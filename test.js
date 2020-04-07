function belirumah (uang,cb){
    let hargarumah = 5000
    let sisauang = uang - hargarumah
    console.log(`saya beli rumah seharga ${hargarumah} , masi punya uang sisa ${sisauang}`)
    cb(sisauang)
}

function beliyanglain(parameterapapun){
    console.log(parameterapapun)
}





belirumah(17000,(sisauang)=>{
    beliyanglain(sisauang)
})
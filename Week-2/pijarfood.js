function pijarFood(harga,voucher,jarak,pajak){
    let biayaAntar = 0
    let ppn = 0
    let diskon = 0

    if (voucher === "PIJARFOOD5" && harga >= 50000) {
        diskon = 0.5 * harga 
        if (diskon >= 50000){
            diskon = 50000
        }
    } else if (voucher === "DITRAKTIRPIJAR" && harga >= 25000) {
        diskon = 0.6 * harga 
        if (diskon >= 30000){
            diskon = 30000
        }
    }
    console.log(diskon)
    
    pajak == true ? ppn = 0.05 * harga : ppn = 0 // decision pajak
    
    jarak > 2 ? biayaAntar = 5000 + (Math.floor(jarak-2) * 3000) : biayaAntar = 5000 // decision biaya antar
    console.log(biayaAntar)


console.log(`Harga          : Rp. ${harga}`)
console.log(`Potongan       : Rp. ${diskon}`)
console.log(`Biaya Antar    : Rp. ${biayaAntar}`)
console.log(`Pajak          : Rp. ${ppn}`)
console.log(`Subtotal       : Rp. ${harga - diskon + biayaAntar + ppn}`)
}

pijarFood(0000,"PIJARFOOD5",0,false)
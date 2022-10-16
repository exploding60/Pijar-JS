const reverseWords = (kalimat) => {
    let kata = kalimat.split(' '), kalimatTerbalik = ''
 console.log(kata,'kata')
    if (kata.length > 1) {
        for (let i = kata.length; i > 0; i--) {
            kalimatTerbalik += kata[i - 1] + ' '
            console.log(kalimatTerbalik)
        }
        console.log(kalimatTerbalik)
    } else {
        console.log(kalimat)
    }
}

reverseWords("Aku gaming banget")
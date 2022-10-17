const reverseWords = (kalimat) => {
    let kata = kalimat.split(' '), kalimatTerbalik = ''
    if (kata.length > 1) {
        for (let i = kata.length; i > 0; i--) {
            kalimatTerbalik += kata[i - 1] + ' '
        }
        console.log(kalimatTerbalik)
    } else {
        console.log(kalimat)
    }
}

reverseWords("Gaming")
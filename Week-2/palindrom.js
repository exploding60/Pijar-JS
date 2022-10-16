palindrom = (input) => {
    let kata = input.toLowerCase()
    let reverse = []
    for (let i = kata.length - 1; i >= 0; i--){
        reverse.push(kata[i])
        console.log(reverse)
    }
    kata == reverse.join("") ? console.log("merukapan kata palindrom") : console.log("bukan")
    console.log(reverse,"rev Join")
}

palindrom("Malam")


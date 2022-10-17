palindrom = (input) => {
    let kata = input.toLowerCase()
    let reverse = []
    for (let i = kata.length - 1; i >= 0; i--){
        reverse.push(kata[i])
    }
    kata == reverse.join("") ? console.log("merukapan kata palindrom") : console.log("bukan")
}

palindrom("lampu")


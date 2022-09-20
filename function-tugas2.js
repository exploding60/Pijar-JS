// variabel
let name = 'Rizky Syahputra'
let email = 'rizkysyahputra14045@gmail.com'
let address = {
    alamat: 'Tangerang banten'
}

let isMerried = false
let hobbies = ['Gaming ','Tidur ','Nonton youtube ']
function variabel(){
    console.log(name)
    console.log(email)
    console.log(`${address.alamat}`)
    console.log(isMerried)
    console.log(hobbies)
}

//segitiga
function segitiga(printSegitiga) {
    let hasil = '';
    for (let i=0; i <= printSegitiga; i++) {
      for (let j = 1; j <= i; j++) {
        hasil += i;
      }
      hasil += '\n';
    }
    return hasil;
  }
  
  // bilagan ganjil genap
  function ganjilGenap(){
  for(let i=0; i<=15;i++){
    if (i%2===0){
        console.log(i, 'adalah bilangan genap')
    }else{
        console.log(i,'adalah bilangan ganjil')
    }
}
  }
  variabel()
  console.log(segitiga(5));
  ganjilGenap()

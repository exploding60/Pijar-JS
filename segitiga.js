function segitiga(printSegitiga) {
    let hasil = '';
    for (let i = 1; i <= printSegitiga; i++) {
      for (let j = 1; j <= i; j++) {
        hasil += i;
      }
      hasil += '\n';
    }
    return hasil;
  }
  console.log(segitiga(5));
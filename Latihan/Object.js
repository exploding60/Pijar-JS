var mahasiswa = { // ini namanya OBject
    nama: "Rizky Ganteng", // Peoperty
    umur: 23,
    ipSemester: [2.30,2.60,2.80,2.88,3.30],
    ipKumulatif: function(){ // kalau yang ada function namanya method
        var total = 0
        var ips = this.ipSemester
        for(var i =0; i< ips.length; i++){
            total += ips[i]
        }
        return total/ips.length
    }
}
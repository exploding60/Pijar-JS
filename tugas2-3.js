let data = {
    id: 1,
    name: "budi pratama",
    gender: "female",
    height: "165cm",
    educational:[
        {
            periode: "2013-2016",
            school: "kalam kudu High school",
            major: "-"
        }
    ],
    phone: {
        primari : '0812312323',
        secondary: '0082342343'
    }
}

let newEducation = {
    periode: "2016-2020",
    school: "State University of Jakarta",
    major: "Accountancy"
}

//ngubah parameter di object data
const ubah = {...data, name: "Rizky syahputra", phone: {primari:"0838391822", secondary: "ganteng"}}
console.log(ubah)

//mengambil data primary dan secondary
console.log(data.phone)//tanpa destructuring

//dengan destructuring
const {primari,secondary} = data.phone
console.log(`ini nomor primari ${primari}`)
console.log(`ini nomor secondary' = ${secondary}`)

//menambah sekolah dengan spreadoperator


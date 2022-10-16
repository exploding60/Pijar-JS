let divideAndSort = (num) => {
    let number = num.toString()
    let split = number.split("0")
  
    let newArr = []
    split.map((item) => {
      let array = item.split("")
      newArr.push(array.sort())
    })
  
    let text = ""
    newArr.map((arr) => {
      text = text.concat(arr.join(""))
    })
  
    console.log(text)
  }
  
  divideAndSort(5956560159466056)
(() => {
  // let myNumber: number //= undefined NOT
  // let myName: string

  let myNull: null
  let myUndefined: undefined

  let myNumber: null | number
  myNumber = 1

  let myString: null | string
  myString = "a"


  // function hi(name: string | null){
  //   let hello= "hi"
  //   if (name) {
  //     hello += "name"
  //   }else{
  //     hello += "nobody"
  //   }
  //   console.log(hello);
  // }

  function hiV2(name: string | null) {
    let hello = "hi"
    hello += name?.toLocaleLowerCase() || "nobody"
    console.log(hello);

  }

  hiV2("Nico")
  hiV2(null)
})()

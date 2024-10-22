(() => {
  let userId: string | number
  userId = 123
  userId = "Hi"


  function greeting(myText: string | number) {
    if (typeof myText === "string") {
      console.log(`String ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }


  greeting("Hi")
  greeting(1)
})()

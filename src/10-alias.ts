(() => {
  type UserId = string | number | boolean // ALIAS TYPE

  let userId: UserId

  function buyShirt(userId: UserId, size: Sizes) {
    if (typeof userId === "string") {
      console.log(`String ${userId.toLowerCase()}`);
    }
  }


  //Literal types
  type Sizes = "S" | "M" | "L" | "XL"

  let shirtSize: Sizes
  shirtSize = "M"
  shirtSize = "L"
  shirtSize = "XL"
  shirtSize = "XC.C,XZVJKLFAJKSÑFJ" //error

  buyShirt(1, "L")

})()

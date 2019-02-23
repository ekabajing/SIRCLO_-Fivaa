function fivaa(num) {
  const result = []
  let controller = num

  for(let i = controller - 1; i >= 0; i--) {
    let arr = []
    for(let j = 0; j < controller + 2; j++ ) {
      if (j >= 2) {
        arr.push(controller + 1)
      } else {
        arr.push(controller - 1)
      }
    }
    controller--
    result.push(arr.join(""))
  }
  return result.join("\n")
}

console.log(fivaa(5));

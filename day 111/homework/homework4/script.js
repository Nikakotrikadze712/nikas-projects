//შექმენით მასივი სადაც იქნება დუბლიკატი მნიშვნელობები. თქვენი დავალებაა ამოშალოთ დუბლიკატები.
let arr = [1, 2, 4, 2, 7, 5, 3, 6, 1]

let result = arr.reduce((a, b) => {
  if (!a.includes(b)) {
    a.push(b)
  }
  return a
}, [])

console.log(result)
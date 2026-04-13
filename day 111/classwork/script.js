//[
//  { name: "apple", price: 2 },
//  { name: "banana", price: 5 },
//  { name: "orange", price: 3 }
//]

//reduce-ით იპოვე ყველაზე ძვირიანი პროდუქტი (ობიექტი მთლიანად დააბრუნე).
let list = [
  { name: "apple", price: 2 },
  { name: "banana", price: 5 },
  { name: "orange", price: 3 }
]

let findExpensive = list.reduce((acc, curr) => {
    if (curr.price > acc.price) {
        return curr
    }
    else {
        return acc
    }
})
console.log(findExpensive)
let day = prompt('enter a day of the week: ')
let amount = Number(prompt('enter the amount'))

let discount = 0

switch (day) {
  case 'ორშაბათი':
    discount = 0.05
    break
  case 'სამშაბათი':
    discount = 0.10
    break
  case 'ოთხშაბათი':
    discount = 0.15
    break
  case 'ხუთშაბათი':
    discount = 0.20
    break
  case 'პარასკევი':
    discount = 0.25
    break
  case 'შაბათი':
    discount = 0.50
    break
  case 'კვირა':
    discount = 0.50
    break
  default:
    discount = -1
}

let price = discount >= 0 && amount > 0 ? amount - amount * discount : 'ასეთი დღე ან თანხა არ არსებობს'

console.log(price)
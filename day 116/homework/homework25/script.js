//შექმენით ცვლადი სადაც შეინახავთ ნებისმიერ რიცხვს. დააბრუნეთ შესაბამისი კვირის დღე.
let num = 3

let day =
    num === 1 ? 'Monday' :
    num === 2 ? 'Tuesday' :
    num === 3 ? 'Wednesday' :
    num === 4 ? 'Thursday' :
    num === 5 ? 'Friday' :
    num === 6 ? 'Saturday' :
    num === 7 ? 'Sunday' :
    'Invalid num'

console.log(day)
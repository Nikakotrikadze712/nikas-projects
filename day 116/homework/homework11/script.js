//შექმენით ფუნქცია რომელიც არგუმენტად გადაცემული სიიდან დააბრუნებს ყველაზე პატარა რიცხვს (Math.min-ის გარეშე)
let func = num => {
    let min = num[0]
    for (let i = 0; i < num.length; i++) {
        if (num[i] < min) {
            min = num[i]
        }
    }
    return min
}

console.log(func([5, 2, 9, 1, 7]))
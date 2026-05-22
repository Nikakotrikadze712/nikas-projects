//შექმენით ფუნქცია რომელიც არგუმენტად გადაცემული სიიდან ამოშლის დუბლიკატებს.
let func = function (text) {
    let result = []
    for (let i = 0; i < text.length; i++) {
        if (!result.includes (text[i]))  {
            result.push (text[i])
        }
    }
    return result
}

console.log(func(['a', 'a', '2', 'f', '/', 'q']))
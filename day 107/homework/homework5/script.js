let count1 = str1 => {
    let result1 = {}
    str1 = str1.toLowerCase()
    for (let i = 0; i < str1.length; i++) {
        if (str1 [i] !== ' ') {
            if (result1 [str1 [i]]) {
                result1 [str1 [i]] = result1 [str1 [i]] + 1
            }
            else {
                result1 [str1 [i]] = 1
            }
        }
    }
    return result1
}

let count2 = function (str2) {
    let result2 = {}
    str2 = str2.toLowerCase()
    for (let i = 0; i < str2.length; i++) {
        if (str2 [i] !== ' ') {
            if (result2 [str2 [i]]) {
                result2 [str2 [i]] = result2 [str2 [i]] + 1
            }
            else {
                result2 [str2 [i]] = 1
            }
        }
    }
    return result2
}

console.log (count1 ('goaacademy'))
console.log (count2 ('goaisthebest'))
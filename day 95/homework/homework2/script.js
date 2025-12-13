//შექმენით ფუნქცია რომელიც არგუმენტად გადაცემული სტრინგიდან ხმოვნებს ჩაანაცვლებს და მათ მაგივრად *-ს გამიაჩენს.
function vowel(text) {
    let result = ''
    for(let i = 0; i < text.length; i++) {
        if (text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u') {
            result += '*'
        }
        else {
            result += text[i]
        }
    }
    return result
}

console.log(vowel('hidroelectrosadguri'))
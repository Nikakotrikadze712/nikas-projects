//შექმენით ფუნქცია რომელიც შეამოწმებს არგუმენტად გადაცემული მნიშვნელიბა არის თუ არა პალინდრომი.
function palindrome (text) {
    let sometext = ''

    for(let i = text.length -1;i >= 0;i -= 1){
            sometext += text[i]
    }
    if (sometext == text) {
        return 'true'
    }
    else{
        return'false'
    }
}

console.log(palindrome('ana'))
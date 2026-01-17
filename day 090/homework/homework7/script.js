//ომხმარებელს შემოატანინეთ ტექსტი და გაიგეთ ეს ტექსტი არის თუ არა პალინდრომი (for loop-ის გამოყენებით).
let text = prompt('enter text: ')
let sometext = ''

for(let i = text.length -1;i >= 0;i -= 1){
        sometext += text[i]
}
if (sometext == text) {
    console.log ('true')
}
else{
    console.log('false')
}

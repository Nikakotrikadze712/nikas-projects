//ომხმარებელს შემოატანინეთ ტექსტი და გაიგეთ ეს ტექსტი არის თუ არა პალინდრომი (for loop-ის გამოყენებით).
let text = prompt('enter text: ')

let sometext = true

for(i in text){
    if(text[i] != text[text.length -1 -i]){
        sometext = false
    }
}

if(sometext) {
    console.log('პალინდრომი')
}
else{
    console.log('არ არის პალინდრომი')
}
//მომხმარებელს შემოატანინეთ გრძელი ტექსტი და ასო ა სადაც იქნება შეცვალოს @-თი.
let text = prompt('შეიყვანე გრძელი ტექსტი: ')

let new_text = ""

let i = 0

for(let i = 0;i < text.length;i++) {
    if(text[i] === 'ა') {
        new_text += '@'
    }
    new_text += text[i]
}

console.log(new_text)
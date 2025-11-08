//მომხმარებელს შემოატანინეთ რიცხვი და ტექსტი. ამ ტექსტში მე0 ინდექსიდან შემოტანილი ინდექსის ჩათვლით გამოიტანეთ ყველა ასო გაერთიანებულად 2-ის გამოტოვებით.
let number = Number(prompt('enter any number: '))
let text = prompt('enter any text: ')
let result = ''
for(let i = number; i < text.length; i += 2) {
    result += text[i]
}
console.log(result)
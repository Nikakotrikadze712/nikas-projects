//საიტზე დაამატეთ h1 სადაც ეწერება მხოლოდ "Hello", js-ში შეუცვალეთ კონტექსტი და გამოაჩინეთ საიტზე "Hello {თქვენი სახელი}!".
let name = prompt('enter your name: ')
let h1 = document.getElementsByClassName('h1')
for (let i of h1) {
    console.log(i.textContent + ' ' + name)
}
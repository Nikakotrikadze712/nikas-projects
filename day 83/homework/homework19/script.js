let password = '1234'
let user_password = prompt('enter password: ')
let Name = 'nika'
let user_name = prompt('enter name: ')
age = 32
let user_age = Number(prompt('enter age: '))
if(user_password === password) {
    console.log('correct password')
}
else if(Name === user_name) {
    console.log('correct name')
}
else if(age === user_age) {
    console.log('correct age')
}
else{
    console.log('incorrect password, name or age')
}
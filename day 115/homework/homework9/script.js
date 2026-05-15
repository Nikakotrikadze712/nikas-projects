//შექმენით ორი ობიექტი. პირველ ობიექტში უნდა იყოს id, სახელი, გვარი, დაბადების დღე. მეორე ობიექტში იგივე id, მეილი, პაროლი. ეს ორი ობიექტი გაერთიანეთ.
let info = {
    id: 1,
    name: 'nika',
    surname: 'kotrikadze',
    birthDate: '2005-10-15'
}

let account = {
    id: 1,
    email: 'email@gmail.com',
    password: 'password123'
}

let user = Object.assign(info, account)

console.log(user)
//შექმენით ფუნქცია updateProduct, რომელიც იღებს ორ არგუმენტს: id და updates (ობიექტი სადაც იქნება ფასი, წიგნის სახელი, ავტორი, გამოცემის წელი). ფუნქციამ უნდა დააბრუნოს ერთი ახალი ობიექტი სადაც იქნება id და updates-იდან დესტრუქციის საშუალებით ამოიღებთ მხოლოდ წიგნის სახელს. (მხოლოდ id, სახელს აბრუნებთ ობიექტის სახით)
function updateProduct(id, updates) {
    let { title } = updates

    return {
        id,
        title
    }
}

let book = {
    price: 25,
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    year: 1997
}

let book = updateProduct(1, book)

console.log(book)
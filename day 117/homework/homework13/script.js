//შექმენით ფუნქცია createProduct(title, price). ფუნქციის შიგნით შექმენით ახალი ცვლადი discountPrice, რომელიც იქნება ფასის ნახევარი. ფუნქციამ Shorthand სინტაქსით უნდა დააბრუნოს ობიექტი, რომელშიც იქნება სამივე თვისება: title, price და discountPrice
function createProduct(title, price) {
    let discountPrice = price / 2
    
    return {
        title,
        price,
        discountPrice
    }
}
let product = createProduct('Phone', 2000)

console.log(product)
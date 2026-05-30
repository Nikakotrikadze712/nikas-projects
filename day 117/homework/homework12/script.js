//შექმენით ფუნქცია registerUser(username, email, password). ფუნქციამ Property Value Shorthand-ის გამოყენებით უნდა დააბრუნოს ობიექტი, სადაც ეს სამივე პარამეტრი თვისებებად იქნება ჩაწერილი.
function registerUser(username, email, password) {
    return {
        username,
        email,
        password
    }
}
let user = registerUser(
    'nika123',
    'email@gmail.com',
    'password'
)

console.log(user)
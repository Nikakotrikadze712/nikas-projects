//მომხმარებელს შემოატანინეთ სიტყვა და ეს სიჯყვა გახლიჩეთ სათითაო სიმბოლოდ. და ისე ჩაამატეთ ახალ სიაში.
let word = prompt('enter a word:')
let list = []
for (let i = 0; i < word.length; i++) {
    list.push(word[i])
}
console.log(list)
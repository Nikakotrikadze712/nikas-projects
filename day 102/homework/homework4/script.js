//შექმენით ობიექტი სადაც შეინახავთ თქვენი საყვარელი ფილმის / წიგნის მონაცემებს. და კონსოლში გამოიტანეთ სათითაოდ ჯერ key და შემდეგ value.
let Movie = {
  title: "Maze Runner",
  director: "James Dashner",
  year: 2014,
  genre: "Adventure"
}

for (let i in Movie) {
  console.log(i)
  console.log(Movie[i])
}